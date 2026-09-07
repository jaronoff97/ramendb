import { createFileRoute } from '@tanstack/react-router'
import { LocationFindManySchema } from 'prisma/generated/schemas'
import type { LocationCreateBody } from '@/lib/types'
import { prisma } from '@/lib/prisma'
import { authMiddleware } from '@/lib/middlewares/require-auth'
import { locationSchema, slugify } from '@/lib/types'

/** Prisma reports a unique constraint clash with this code. */
const UNIQUE_VIOLATION = 'P2002'

/**
 * Creates the location, and keeps trying until the slug is free.
 *
 * `Location.slug` is unique, and a second "Ramen Ya" used to fail with an
 * opaque 500. A clash is normal here, not an error, so we count up and then
 * stop caring about a pretty slug. Catching the clash rather than reading
 * first also means two requests at once cannot both take the same slug.
 */
async function createWithFreeSlug(body: LocationCreateBody) {
  // `hours` is a Json column. Prisma rejects a plain `null` there, so leave the
  // field out instead of writing one.
  const { hours, ...rest } = body
  const data = { ...rest, ...(hours == null ? {} : { hours }) }
  const base = slugify(body.name) || 'location'

  for (let attempt = 1; attempt <= 5; attempt++) {
    const slug = attempt === 1 ? base : `${base}-${attempt}`
    try {
      return await prisma.location.create({ data: { ...data, slug } })
    } catch (error) {
      if ((error as { code?: string }).code !== UNIQUE_VIOLATION) throw error
    }
  }

  const suffix = Math.random().toString(36).slice(2, 8)
  return prisma.location.create({
    data: { ...data, slug: `${base}-${suffix}` },
  })
}

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
                  include: { tag: true },
                },
              },
              orderBy: { name: 'asc' },
              take: 20,
            })

            if (!parsed.success) {
              return Response.json(parsed.error, { status: 400 })
            }

            const locations = await prisma.location.findMany(parsed.data)
            return Response.json(locations)
          },
        },

        POST: {
          middleware: [authMiddleware],
          handler: async ({ request }) => {
            const body = await request.json()
            const data = locationSchema.safeParse(body)

            if (!data.success) {
              return Response.json(data.error, { status: 400 })
            }

            const location = await createWithFreeSlug(data.data)
            return Response.json(location)
          },
        },
      }),
  },
})
