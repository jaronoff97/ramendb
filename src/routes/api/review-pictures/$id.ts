import { createFileRoute } from '@tanstack/react-router'
import { ReviewPictureUpdateInputObjectSchema } from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'

export const Route = createFileRoute('/api/review-pictures/$id')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async ({ params }) => {
            const reviewPicture = await prisma.reviewPicture.findUnique({
              where: { id: params.id },
            })

            if (!reviewPicture) {
              return new Response('ReviewPicture not found', { status: 404 })
            }

            return Response.json(reviewPicture)
          }
        },
        PUT: {
          middleware: [authMiddleware],
          handler: async ({ request, params }) => {
            const body = await request.json()
            const data = ReviewPictureUpdateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }

            const updated = await prisma.reviewPicture.update({
              where: { id: params.id },
              data: data.data
            })

            return Response.json(updated)
          }
        },
        DELETE: {
          middleware: [authMiddleware],
          handler: async ({ params }) => {
            await prisma.reviewPicture.delete({ where: { id: params.id } })
            return new Response(null, { status: 204 })
          }
        },
      })
  }
})
