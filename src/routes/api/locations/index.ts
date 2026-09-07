import { createFileRoute } from '@tanstack/react-router'
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
 * opaque 500. A clash is normal here, so we count up and then stop caring
 * about a pretty slug. Catching the clash rather than reading first also
 * means two requests at once cannot both take the same slug.
 */
async function createWithFreeSlug(body: LocationCreateBody) {
  // `hours` is a Json column. Prisma rejects a plain `null` there, so leave
  // the field out instead of writing one.
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

/**
 * Attaches the numbers the map and the location cards show.
 *
 * Two queries, not one per location: `groupBy` averages every rating in a
 * single pass and we join in memory.
 */
async function withRatings<T extends { id: string }>(locations: Array<T>) {
  if (locations.length === 0) return []

  const ids = locations.map((l) => l.id)
  const [ratings, reviews] = await Promise.all([
    prisma.rating.groupBy({
      by: ['locationId'],
      where: { locationId: { in: ids } },
      _avg: { value: true },
      _count: { value: true },
    }),
    prisma.review.groupBy({
      by: ['locationId'],
      where: { locationId: { in: ids } },
      _count: { _all: true },
    }),
  ])

  const byRating = new Map(ratings.map((r) => [r.locationId, r]))
  const byReview = new Map(reviews.map((r) => [r.locationId, r._count._all]))

  return locations.map((location) => {
    const rating = byRating.get(location.id)
    return {
      ...location,
      averageRating: rating?._avg.value ?? null,
      ratingCount: rating?._count.value ?? 0,
      reviewCount: byReview.get(location.id) ?? 0,
    }
  })
}

export const Route = createFileRoute('/api/locations/')({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        // Public. The map reads this to show places people have reviewed, so
        // a signed-out visitor sees the point of the site before signing in.
        GET: {
          handler: async ({ request }) => {
            const url = new URL(request.url)
            const q = url.searchParams.get('q')?.trim()
            const reviewedOnly = url.searchParams.get('reviewed') === '1'

            const locations = await prisma.location.findMany({
              where: {
                ...(q
                  ? {
                      OR: [
                        { name: { contains: q, mode: 'insensitive' as const } },
                        { city: { contains: q, mode: 'insensitive' as const } },
                        {
                          country: {
                            contains: q,
                            mode: 'insensitive' as const,
                          },
                        },
                      ],
                    }
                  : {}),
                ...(reviewedOnly ? { reviews: { some: {} } } : {}),
              },
              orderBy: { name: 'asc' },
              take: q ? 20 : 200,
              select: {
                id: true,
                slug: true,
                osmId: true,
                name: true,
                type: true,
                address: true,
                city: true,
                country: true,
                latitude: true,
                longitude: true,
                website: true,
              },
            })

            return Response.json(await withRatings(locations))
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

            // Every "Start Review" on the same map pin used to add another
            // row. The OSM id is unique, so reuse what is already there.
            if (data.data.osmId) {
              const existing = await prisma.location.findUnique({
                where: { osmId: data.data.osmId },
              })
              if (existing) return Response.json(existing)
            }

            const location = await createWithFreeSlug(data.data)
            return Response.json(location)
          },
        },
      }),
  },
})
