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
          handler: async ({ request }) => {
            const body = await request.json()
            const data = RatingCreateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }
            const rating = await prisma.rating.create({ data: data.data })
            return Response.json(rating)
          }
        },
      })
  }
})
