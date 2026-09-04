import { createFileRoute } from '@tanstack/react-router'
import { LocationUpdateInputObjectSchema } from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'

// ponytail: locations are shared catalog data with no owner column, so any
// signed-in user may edit one. Add `Location.createdById` and an owner check
// here if edit wars or vandalism ever show up.
export const Route = createFileRoute('/api/locations/$id')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async ({ params }) => {
            const location = await prisma.location.findUnique({
              where: { id: params.id },
              include: { tags: { include: { tag: true } }, pictures: true },
            })

            if (!location) {
              return new Response('Location not found', { status: 404 })
            }

            return Response.json(location)
          }
        },
        PUT: {
          middleware: [authMiddleware],
          handler: async ({ request, params }) => {
            const body = await request.json()
            const data = LocationUpdateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }

            const updated = await prisma.location.update({
              where: { id: params.id },
              data: data.data
            })

            return Response.json(updated)
          }
        },
        DELETE: {
          middleware: [authMiddleware],
          handler: async ({ params }) => {
            await prisma.location.delete({ where: { id: params.id } })
            return new Response(null, { status: 204 })
          }
        },
      })
  }
})
