import { createFileRoute } from '@tanstack/react-router';
import {
  LocationCreateInputObjectSchema,
  LocationFindManySchema,
} from 'prisma/generated/schemas';
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth';

export const Route = createFileRoute('/api/locations/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: {
          handler: async ({ request }) => {
            const url = new URL(request.url)
            const q = url.searchParams.get('q')?.trim()

            // Build a "where" clause compatible with LocationWhereInput
            const where = q
              ? {
                OR: [
                  { name: { contains: q, mode: 'insensitive' } },
                  { city: { contains: q, mode: 'insensitive' } },
                  { country: { contains: q, mode: 'insensitive' } },
                ],
              }
              : undefined

            // Build full findMany args validated by your generated Zod schema
            const parsed = LocationFindManySchema.safeParse({
              where,
              include: {
                tags: {
                  include: { tag: true }
                }
              },
              orderBy: { name: 'asc' },
              take: q ? 20 : undefined,
            })

            if (!parsed.success) {
              return Response.json(parsed.error, { status: 400 })
            }

            const locations = await prisma.location.findMany(parsed.data)
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
