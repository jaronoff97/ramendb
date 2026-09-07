import { createFileRoute } from '@tanstack/react-router'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'
import { ratingCreateSchema } from '@/lib/types'

export const Route = createFileRoute('/api/ratings/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const ratings = await prisma.rating.findMany({
              include: { tags: { include: { tag: true } } },
            })
            return Response.json(ratings)
          },
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request, context }) => {
            const body = await request.json()
            const data = ratingCreateSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }
            const { reviewId, ...rating } = data.data

            // One score per person per location, so a second submit updates the
            // first rather than failing on the unique constraint.
            const saved = await prisma.rating.upsert({
              where: {
                userId_locationId: {
                  userId: context.userId,
                  locationId: rating.locationId,
                },
              },
              update: { value: rating.value },
              create: { ...rating, userId: context.userId },
            })

            // Link the review that this score belongs to, when there is one.
            if (reviewId) {
              await prisma.review.updateMany({
                where: { id: reviewId, userId: context.userId },
                data: { ratingId: saved.id },
              })
            }

            return Response.json(saved)
          },
        },
      }),
  },
})
