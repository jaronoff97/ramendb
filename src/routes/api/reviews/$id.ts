import { createFileRoute } from '@tanstack/react-router'
import { ReviewUpdateInputObjectSchema } from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'

export const Route = createFileRoute('/api/reviews/$id')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async ({ params }) => {
            const review = await prisma.review.findUnique({
              where: { id: params.id },
              include: { tags: { include: { tag: true } }, pictures: true },
            })

            if (!review) {
              return new Response('Location not found', { status: 404 })
            }

            return Response.json(review)
          }
        },
        PUT: {
          middleware: [authMiddleware],
          handler: async ({ request, params }) => {
            const body = await request.json()
            const data = ReviewUpdateInputObjectSchema.parse(body)

            const updated = await prisma.review.update({
              where: { id: params.id },
              data
            })

            return Response.json(updated)
          }
        },
        DELETE: {
          middleware: [authMiddleware],
          handler: async ({ params }) => {
            await prisma.review.delete({ where: { id: params.id } })
            return new Response(null, { status: 204 })
          }
        },
      })
  }
})
