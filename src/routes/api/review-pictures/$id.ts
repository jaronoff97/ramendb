// src/routes/api/reviews/$id.ts
import { createFileRoute } from '@tanstack/react-router';
import { prisma } from '@/lib/prisma'

export const Route = createFileRoute('/api/review-pictures/$id')({

  server: {
    handlers: {
      async GET({ params }) {
        const review = await prisma.review.findUnique({
          where: { id: params.id },
          include: {
            user: true,
            location: true,
            tags: { include: { tag: true } },
            pictures: true,
          },
        })
        return Response.json(review)
      },
      async PUT({ request, params }) {
        const body = await request.json()
        const updated = await prisma.review.update({
          where: { id: params.id },
          data: body,
        })
        return Response.json(updated)
      },
      async DELETE({ params }) {
        await prisma.review.delete({ where: { id: params.id } })
        return new Response(null, { status: 204 })
      },
    }
  }
})
