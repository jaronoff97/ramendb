import * as z from 'zod';
export const RatingGroupByResultSchema = z.array(z.object({
  id: z.string(),
  locationId: z.string(),
  userId: z.string(),
  value: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    locationId: z.number(),
    userId: z.number(),
    value: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    location: z.number(),
    user: z.number(),
    reviews: z.number(),
    tags: z.number(),
    ratingPictures: z.number()
  }).optional(),
  _sum: z.object({
    value: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    value: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    locationId: z.string().nullable(),
    userId: z.string().nullable(),
    value: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    locationId: z.string().nullable(),
    userId: z.string().nullable(),
    value: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));