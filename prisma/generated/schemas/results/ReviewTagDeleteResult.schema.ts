import * as z from 'zod';
export const ReviewTagDeleteResultSchema = z.nullable(z.object({
  reviewId: z.string(),
  tagId: z.string(),
  review: z.unknown(),
  tag: z.unknown()
}));