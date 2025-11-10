import { createFileRoute } from '@tanstack/react-router';
import { TagCreateInputObjectSchema } from 'prisma/generated/schemas';
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth';

export const Route = createFileRoute('/api/tags/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const tags = await prisma.tag.findMany({ include: { tags: { include: { tag: true } } } })
            return Response.json(tags)
          }
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request }) => {
            const body = await request.json()
            const data = TagCreateInputObjectSchema.parse(body)
            const tag = await prisma.tag.create({ data })
            return Response.json(tag)
          }
        },
      })
  }
})
