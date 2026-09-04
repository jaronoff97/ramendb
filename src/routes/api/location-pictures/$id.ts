import { createFileRoute } from '@tanstack/react-router'
import { LocationPictureUpdateInputObjectSchema } from 'prisma/generated/schemas'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'

export const Route = createFileRoute('/api/location-pictures/$id')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async ({ params }) => {
            const locationPicture = await prisma.locationPicture.findUnique({
              where: { id: params.id },
            })

            if (!locationPicture) {
              return new Response('LocationPicture not found', { status: 404 })
            }

            return Response.json(locationPicture)
          }
        },
        PUT: {
          middleware: [authMiddleware],
          handler: async ({ request, params }) => {
            const body = await request.json()
            const data = LocationPictureUpdateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }

            const updated = await prisma.locationPicture.update({
              where: { id: params.id },
              data: data.data
            })

            return Response.json(updated)
          }
        },
        DELETE: {
          middleware: [authMiddleware],
          handler: async ({ params }) => {
            await prisma.locationPicture.delete({ where: { id: params.id } })
            return new Response(null, { status: 204 })
          }
        },
      })
  }
})
