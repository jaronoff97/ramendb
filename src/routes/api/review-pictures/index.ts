import { createFileRoute } from '@tanstack/react-router'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'
import { reviewPicturesPayloadSchema } from '@/lib/types'

export const Route = createFileRoute('/api/review-pictures/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const reviewPictures = await prisma.reviewPicture.findMany()
            return Response.json(reviewPictures)
          },
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request, context }) => {
            const body = await request.json()
            const data = reviewPicturesPayloadSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }

            // Every picture must attach to a review the caller owns.
            const reviewIds = [
              ...new Set(data.data.pictures.map((p) => p.reviewId)),
            ]
            const owned = await prisma.review.count({
              where: { id: { in: reviewIds }, userId: context.userId },
            })
            if (owned !== reviewIds.length) {
              return new Response('Forbidden', { status: 403 })
            }

            const created = await prisma.reviewPicture.createManyAndReturn({
              data: data.data.pictures,
            })
            return Response.json(created)
          },
        },
      }),
  },
})
