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
            const data = RatingCreateInputObjectSchema.parse(body)
            const rating = await prisma.rating.create({ data })
            return Response.json(rating)
          }
        },
      })
  }
})
