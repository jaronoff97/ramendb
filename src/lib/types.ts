import { z } from 'zod'

export const locationSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  type: z.string(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  website: z.url().optional(),
})

export const dishSchema = z.object({
  locationId: z.cuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  price: z.number().optional(),
})

export const tagSchema = z.object({
  name: z.string().min(1),
  category: z.string().optional(),
})

export const ratingSchema = z.object({
  locationId: z.cuid(),
  value: z.number().min(0).max(5),
  tagIds: z.array(z.string()).optional(),
})

export const reviewSchema = z.object({
  locationId: z.cuid(),
  ratingId: z.string().optional(),
  title: z.string().optional(),
  text: z.string().optional(),
  tagIds: z.array(z.string()).optional(),
  pictures: z.array(z.object({ url: z.url(), caption: z.string().optional() })).optional(),
})

export const reviewPictureSchema = z.object({
  reviewId: z.cuid(),
  url: z.url(),
  caption: z.string().optional(),
})

// The upload hook posts a batch, so the route accepts one.
export const reviewPicturesPayloadSchema = z.object({
  pictures: z.array(reviewPictureSchema).min(1),
})
