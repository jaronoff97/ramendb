import { createFileRoute } from '@tanstack/react-router';
import { ReviewPictureCreateInputObjectSchema } from 'prisma/generated/schemas';
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth';

export const Route = createFileRoute('/api/review-pictures/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const reviewPictures = await prisma.reviewPicture.findMany()
            return Response.json(reviewPictures)
          }
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request }) => {
            const body = await request.json()
            const data = ReviewPictureCreateInputObjectSchema.parse(body)
            const reviewPicture = await prisma.reviewPicture.create({ data })
            return Response.json(reviewPicture)
          }
        },
      })
  }
})
