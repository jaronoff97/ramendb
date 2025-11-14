import { createFileRoute } from '@tanstack/react-router';
import { TagCreateManyInputObjectSchema } from 'prisma/generated/schemas';
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth';

export const Route = createFileRoute('/api/tags/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const tags = await prisma.tag.findMany()
            return Response.json(tags)
          }
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request }) => {
            const body = await request.json()
            const data = TagCreateManyInputObjectSchema.parse(body)
            const tags = await prisma.tag.createMany({ data })
            return Response.json(tags)
          }
        },
      })
  }
})
