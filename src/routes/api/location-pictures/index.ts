import { createFileRoute } from '@tanstack/react-router';
import { LocationPictureCreateInputObjectSchema } from 'prisma/generated/schemas';
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth';

export const Route = createFileRoute('/api/location-pictures/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async () => {
            const locationPictures = await prisma.locationPicture.findMany()
            return Response.json(locationPictures)
          }
        },
        POST: {
          middleware: [authMiddleware],
          handler: async ({ request }) => {
            const body = await request.json()
            const data = LocationPictureCreateInputObjectSchema.safeParse(body)
            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }
            const locationPicture = await prisma.locationPicture.create({ data: data.data })
            return Response.json(locationPicture)
          }
        },
      })
  }
})
