import { createFileRoute } from '@tanstack/react-router'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'
import { listQuerySchema, reviewCreateSchema } from '@/lib/types'

export const Route = createFileRoute('/api/reviews/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
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

            // Ask for one more than the page. Its presence is the only thing
            // that tells us whether another page exists.
            //
            // `select`, not `include`. The table renders four columns, so the
            // whole related rows, every picture and every tag were payload
            // nobody read. There is no re-parse on the way out either: this
            // shape came out of our own schema one line ago.
            const rows = await prisma.review.findMany({
              take: take + 1,
              ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
              orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
              select: {
                id: true,
                title: true,
                createdAt: true,
                user: { select: { name: true } },
                rating: { select: { value: true } },
                location: { select: { name: true } },
              },
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
            // The author comes from the verified token, never from the body.
            const review = await prisma.review.create({
              data: { ...data.data, userId: context.userId },
            })
            return Response.json(review)
          },
        },
      }),
  },
})
