import { createFileRoute } from '@tanstack/react-router';
import { LocationCreateInputObjectSchema } from 'prisma/generated/schemas';
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth';

export const Route = createFileRoute('/api/locations/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const locations = await prisma.location.findMany({ include: { tags: { include: { tag: true } } } })
            return Response.json(locations)
          }
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request }) => {
            const body = await request.json()
            const data = LocationCreateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }
            const location = await prisma.location.create({ data: data.data })
            return Response.json(location)
          }
        },
      })
  }
})
