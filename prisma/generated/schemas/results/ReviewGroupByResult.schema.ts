import * as z from 'zod';
export const ReviewGroupByResultSchema = z.array(z.object({
  id: z.string(),
  locationId: z.string(),
  userId: z.string(),
  ratingId: z.string(),
  title: z.string(),
  text: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    locationId: z.number(),
    userId: z.number(),
    ratingId: z.number(),
    title: z.number(),
    text: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    location: z.number(),
    user: z.number(),
    rating: z.number(),
    pictures: z.number(),
    tags: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    locationId: z.string().nullable(),
    userId: z.string().nullable(),
    ratingId: z.string().nullable(),
    title: z.string().nullable(),
    text: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    locationId: z.string().nullable(),
    userId: z.string().nullable(),
    ratingId: z.string().nullable(),
    title: z.string().nullable(),
    text: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));