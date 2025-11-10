// src/routes/api/reviews/index.ts
import { createFileRoute } from '@tanstack/react-router';
import { prisma } from '@/lib/prisma'

export const Route = createFileRoute('/api/review-pictures/')({

  server: {
    handlers: {
      async GET() {
        const reviews = await prisma.review.findMany({
          include: {
            user: true,
            location: true,
            tags: { include: { tag: true } },
            pictures: true,
          },
        })
        return Response.json(reviews)
      },
      async POST({ request }) {
        const body = await request.json()
        const review = await prisma.review.create({
          data: {
            ...body,
            tags: { create: body.tagIds?.map((tagId: string) => ({ tagId })) ?? [] },
            pictures: { create: body.pictures ?? [] },
          },
          include: { tags: { include: { tag: true } }, pictures: true },
        })
        return Response.json(review)
      },
    }
  }
})
