import { createFileRoute } from '@tanstack/react-router'
import { RatingUpdateInputObjectSchema } from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'
import { ownerGate } from '@/lib/authz'

async function denyUnlessOwner(id: string, userId: string) {
  const rating = await prisma.rating.findUnique({ where: { id }, select: { userId: true } })
  return ownerGate(rating, userId, 'Rating')
}

export const Route = createFileRoute('/api/ratings/$id')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async ({ params }) => {
            const rating = await prisma.rating.findUnique({
              where: { id: params.id },
            })

            if (!rating) {
              return new Response('Rating not found', { status: 404 })
            }

            return Response.json(rating)
          }
        },
        PUT: {
          middleware: [authMiddleware],
          handler: async ({ request, params, context }) => {
            const denied = await denyUnlessOwner(params.id, context.userId)
            if (denied) return denied

            const body = await request.json()
            const data = RatingUpdateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }

            // Reassigning the author is never a legitimate update.
            const { user: _user, ...updateData } = data.data

            const updated = await prisma.rating.update({
              where: { id: params.id },
              data: updateData
            })

            return Response.json(updated)
          }
        },
        DELETE: {
          middleware: [authMiddleware],
          handler: async ({ params, context }) => {
            const denied = await denyUnlessOwner(params.id, context.userId)
            if (denied) return denied

            await prisma.rating.delete({ where: { id: params.id } })
            return new Response(null, { status: 204 })
          }
        },
      })
  }
})
