import { createFileRoute } from '@tanstack/react-router'
import { RatingUpdateInputObjectSchema } from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'

export const Route = createFileRoute('/api/ratings/$id')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async ({ params }) => {
            const rating = await prisma.rating.findUnique({
              where: { id: params.id },
              include: { tags: { include: { tag: true } }, pictures: true },
            })

            if (!rating) {
              return new Response('Location not found', { status: 404 })
            }

            return Response.json(rating)
          }
        },
        PUT: {
          middleware: [authMiddleware],
          handler: async ({ request, params }) => {
            const body = await request.json()
            // LocationCreateInputObjectSchema
            const data = RatingUpdateInputObjectSchema.parse(body)

            const updated = await prisma.rating.update({
              where: { id: params.id },
              data
            })

            return Response.json(updated)
          }
        },
        DELETE: {
          middleware: [authMiddleware],
          handler: async ({ params }) => {
            await prisma.rating.delete({ where: { id: params.id } })
            return new Response(null, { status: 204 })
          }
        },
      })
  }
})
