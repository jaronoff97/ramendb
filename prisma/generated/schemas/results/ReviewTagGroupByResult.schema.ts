import * as z from 'zod';
export const ReviewTagGroupByResultSchema = z.array(z.object({
  reviewId: z.string(),
  tagId: z.string(),
  _count: z.object({
    reviewId: z.number(),
    tagId: z.number(),
    review: z.number(),
    tag: z.number()
  }).optional(),
  _min: z.object({
    reviewId: z.string().nullable(),
    tagId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    reviewId: z.string().nullable(),
    tagId: z.string().nullable()
  }).nullable().optional()
}));