import { createFileRoute } from '@tanstack/react-router'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'
import { withAuth } from '@/lib/workos/ssr/session'
import { listQuerySchema, reviewCreateSchema } from '@/lib/types'
import { isOwnedImageUrl } from '@/lib/uploads'

/** Exactly the columns a review card renders. */
const listSelect = {
  id: true,
  title: true,
  text: true,
  createdAt: true,
  user: { select: { name: true, pictureUrl: true } },
  rating: { select: { value: true } },
  location: { select: { name: true, slug: true, city: true } },
  pictures: { select: { url: true }, take: 4 },
} as const

export const Route = createFileRoute('/api/reviews/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        // Public, so a location page can show its reviews to a signed-out
        // visitor. `mine=1` narrows it to the caller and needs a session.
        GET: {
          handler: async ({ request }) => {
            const url = new URL(request.url)
            const query = listQuerySchema.safeParse({
              take: url.searchParams.get('take') ?? undefined,
              cursor: url.searchParams.get('cursor') ?? undefined,
            })
            if (!query.success) {
              return Response.json(query.error, { status: 400 })
            }
            const { take, cursor } = query.data
            const locationId = url.searchParams.get('locationId') ?? undefined

            let userId: string | undefined
            if (url.searchParams.get('mine') === '1') {
              const session = await withAuth()
              if (!session.user) {
                return new Response('Unauthorized', { status: 401 })
              }
              const me = await prisma.user.findUnique({
                where: { workosId: session.user.id },
                select: { id: true },
              })
              // No local row yet means no reviews yet.
              if (!me) return Response.json({ reviews: [], nextCursor: null })
              userId = me.id
            }

            // Ask for one more than the page. Its presence is the only thing
            // that tells us whether another page exists.
            const rows = await prisma.review.findMany({
              take: take + 1,
              ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
              where: {
                ...(userId ? { userId } : {}),
                ...(locationId ? { locationId } : {}),
              },
              orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
              select: listSelect,
            })

            const hasMore = rows.length > take
            const page = hasMore ? rows.slice(0, take) : rows
            return Response.json({
              reviews: page,
              nextCursor: hasMore ? page[page.length - 1].id : null,
            })
          },
        },

        POST: {
          middleware: [authMiddleware],
          handler: async ({ request, context }) => {
            const body = await request.json()
            const data = reviewCreateSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }
            const { locationId, title, text, value, pictures = [] } = data.data
            const userId = context.userId

            // With storage configured, a picture must be one we hold. Without
            // this the upload route would be decoration and any URL would do.
            if (!pictures.every(isOwnedImageUrl)) {
              return Response.json(
                { message: 'Pictures must be uploaded through RamenDB.' },
                { status: 400 },
              )
            }

            // One transaction. The wizard used to write the review, then the
            // pictures, then the rating, so abandoning halfway left a review
            // with no score behind.
            const review = await prisma.$transaction(async (tx) => {
              const rating = await tx.rating.upsert({
                where: { userId_locationId: { userId, locationId } },
                update: { value },
                create: { userId, locationId, value },
              })

              return tx.review.create({
                data: {
                  userId,
                  locationId,
                  title,
                  text: text ?? null,
                  ratingId: rating.id,
                  ...(pictures.length
                    ? { pictures: { create: pictures.map((url) => ({ url })) } }
                    : {}),
                },
                select: { id: true, location: { select: { slug: true } } },
              })
            })

            return Response.json(review)
          },
        },
      }),
  },
})
