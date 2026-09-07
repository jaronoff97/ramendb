import { createFileRoute } from '@tanstack/react-router'
import * as z from 'zod'
import { TagCreateManyInputObjectSchema } from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'

// The client creates tags in batches, so the body is an array.
const createTagsSchema = z.array(TagCreateManyInputObjectSchema).min(1)

export const Route = createFileRoute('/api/tags/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const tags = await prisma.tag.findMany()
            return Response.json(tags)
          },
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request }) => {
            const body = await request.json()
            const data = createTagsSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }
            // `Tag.name` is unique and tags are shared, so a repeat is not an error.
            const tags = await prisma.tag.createMany({
              data: data.data,
              skipDuplicates: true,
            })
            return Response.json(tags)
          },
        },
      }),
  },
})
