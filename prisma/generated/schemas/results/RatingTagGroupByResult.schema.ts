import * as z from 'zod';
export const RatingTagGroupByResultSchema = z.array(z.object({
  ratingId: z.string(),
  tagId: z.string(),
  _count: z.object({
    ratingId: z.number(),
    tagId: z.number(),
    rating: z.number(),
    tag: z.number()
  }).optional(),
  _min: z.object({
    ratingId: z.string().nullable(),
    tagId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    ratingId: z.string().nullable(),
    tagId: z.string().nullable()
  }).nullable().optional()
}));