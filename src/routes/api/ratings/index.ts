import { createFileRoute } from '@tanstack/react-router';
import { RatingCreateInputObjectSchema } from 'prisma/generated/schemas';
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth';

export const Route = createFileRoute('/api/ratings/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const ratings = await prisma.rating.findMany({ include: { tags: { include: { tag: true } } } })
            return Response.json(ratings)
          }
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request, context }) => {
            const body = await request.json()
            const data = RatingCreateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }
            // The author comes from the verified token. A `user` in the body is ignored.
            const rating = await prisma.rating.create({
              data: { ...data.data, user: { connect: { id: context.userId } } },
            })
            return Response.json(rating)
          }
        },
      })
  }
})
