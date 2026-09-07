import { createFileRoute } from '@tanstack/react-router'
import {
  ReviewResultSchema,
  ReviewUpdateInputObjectSchema,
} from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'
import { ownerGate } from '@/lib/authz'

async function denyUnlessOwner(id: string, userId: string) {
  const review = await prisma.review.findUnique({
    where: { id },
    select: { userId: true },
  })
  return ownerGate(review, userId, 'Review')
}

export const Route = createFileRoute('/api/reviews/$id')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async ({ params }) => {
            const review = await prisma.review.findUnique({
              where: { id: params.id },
              include: {
                tags: { include: { tag: true } },
                pictures: true,
                location: true,
                rating: true,
              },
            })
            if (!review) {
              return new Response('Review not found', { status: 404 })
            }
            const data = ReviewResultSchema.parse(review)
            return Response.json(data)
          },
        },
        PUT: {
          middleware: [authMiddleware],
          handler: async ({ request, params, context }) => {
            const denied = await denyUnlessOwner(params.id, context.userId)
            if (denied) return denied

            const body = await request.json()
            const data = ReviewUpdateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }

            // Reassigning the author is never a legitimate update.
            const { user: _user, ...updateData } = data.data

            const updated = await prisma.review.update({
              where: { id: params.id },
              data: updateData,
            })

            return Response.json(updated)
          },
        },
        DELETE: {
          middleware: [authMiddleware],
          handler: async ({ params, context }) => {
            const denied = await denyUnlessOwner(params.id, context.userId)
            if (denied) return denied

            await prisma.review.delete({ where: { id: params.id } })
            return new Response(null, { status: 204 })
          },
        },
      }),
  },
})
