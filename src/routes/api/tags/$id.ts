import { createFileRoute } from '@tanstack/react-router'
import { TagUpdateInputObjectSchema } from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'

export const Route = createFileRoute('/api/tags/$id')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async ({ params }) => {
            const tag = await prisma.tag.findUnique({
              where: { id: params.id },
              include: { tags: { include: { tag: true } }, pictures: true },
            })

            if (!tag) {
              return new Response('Location not found', { status: 404 })
            }

            return Response.json(tag)
          }
        },
        PUT: {
          middleware: [authMiddleware],
          handler: async ({ request, params }) => {
            const body = await request.json()
            const data = TagUpdateInputObjectSchema.parse(body)

            const updated = await prisma.tag.update({
              where: { id: params.id },
              data
            })

            return Response.json(updated)
          }
        },
        DELETE: {
          middleware: [authMiddleware],
          handler: async ({ params }) => {
            await prisma.tag.delete({ where: { id: params.id } })
            return new Response(null, { status: 204 })
          }
        },
      })
  }
})
