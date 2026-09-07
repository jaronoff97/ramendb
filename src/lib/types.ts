import { z } from 'zod'

/**
 * What a client may send when it creates a location. There is no `slug`: the
 * server derives one from the name, because `Location.slug` is unique and two
 * ramen shops share a name all the time.
 */
export const locationSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  address: z.string().nullish(),
  city: z.string().nullish(),
  state: z.string().nullish(),
  country: z.string().nullish(),
  website: z.url().nullish(),
  latitude: z.number().min(-90).max(90).nullish(),
  longitude: z.number().min(-180).max(180).nullish(),
  // Opening hours arrive as an OSM `opening_hours` string. The column is Json,
  // so anything serialisable is legal; we only ever store what OSM gave us.
  hours: z.string().nullish(),
})
export type LocationCreateBody = z.infer<typeof locationSchema>

/**
 * What a client may send when it creates a review. There is no author field:
 * the server takes that from the verified session.
 */
export const reviewCreateSchema = z.object({
  locationId: z.cuid(),
  title: z.string().min(1),
  text: z.string().nullish(),
  ratingId: z.cuid().nullish(),
})
export type ReviewCreateBody = z.infer<typeof reviewCreateSchema>

/** Same rule for a rating. One person gets one score per location. */
export const ratingCreateSchema = z.object({
  locationId: z.cuid(),
  value: z.number().int().min(0).max(5),
  reviewId: z.cuid().nullish(),
})
export type RatingCreateBody = z.infer<typeof ratingCreateSchema>

export const reviewPictureSchema = z.object({
  reviewId: z.cuid(),
  url: z.url(),
  caption: z.string().optional(),
})

// The upload hook posts a batch, so the route accepts one.
export const reviewPicturesPayloadSchema = z.object({
  pictures: z.array(reviewPictureSchema).min(1),
})

/**
 * Cursor pagination for the list routes. `take` is capped, so no caller can
 * ask for the whole table by accident.
 */
export const listQuerySchema = z.object({
  take: z.coerce.number().int().min(1).max(100).default(25),
  cursor: z.cuid().optional(),
})

/**
 * Turns a display name into a URL slug. `Location.slug` is unique, so the
 * caller has to add something of its own when two places share a name. See
 * `uniqueSlug`.
 */
export function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}
