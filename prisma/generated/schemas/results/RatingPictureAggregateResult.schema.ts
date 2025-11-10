import * as z from 'zod';
export const RatingPictureAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    ratingId: z.number(),
    url: z.number(),
    caption: z.number(),
    createdAt: z.number(),
    rating: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    ratingId: z.string().nullable(),
    url: z.string().nullable(),
    caption: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    ratingId: z.string().nullable(),
    url: z.string().nullable(),
    caption: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});