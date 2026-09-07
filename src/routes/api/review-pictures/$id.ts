import { createFileRoute } from '@tanstack/react-router'
import { ReviewPictureUpdateInputObjectSchema } from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'
import { ownerGate } from '@/lib/authz'

/** A picture belongs to whoever wrote the review it hangs off. */
async function denyUnlessOwner(id: string, userId: string) {
  const picture = await prisma.reviewPicture.findUnique({
    where: { id },
    select: { review: { select: { userId: true } } },
  })
  return ownerGate(picture?.review, userId, 'ReviewPicture')
}

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
          },
        },
        PUT: {
          middleware: [authMiddleware],
          handler: async ({ request, params, context }) => {
            const denied = await denyUnlessOwner(params.id, context.userId)
            if (denied) return denied

            const body = await request.json()
            const data = ReviewPictureUpdateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }

            // Moving a picture to another review would sidestep the check above.
            const { review: _review, ...updateData } = data.data

            const updated = await prisma.reviewPicture.update({
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

            await prisma.reviewPicture.delete({ where: { id: params.id } })
            return new Response(null, { status: 204 })
          },
        },
      }),
  },
})
