import { createFileRoute } from '@tanstack/react-router';
import { ReviewCreateInputObjectSchema } from 'prisma/generated/schemas';
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth';

export const Route = createFileRoute('/api/reviews/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const reviews = await prisma.review.findMany({ include: { tags: { include: { tag: true } } } })
            return Response.json(reviews)
          }
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request }) => {
            const body = await request.json()
            const data = ReviewCreateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }
            const review = await prisma.review.create({ data: data.data })
            return Response.json(review)
          }
        },
      })
  }
})
