import * as z from 'zod';
export const ReviewTagFindFirstResultSchema = z.nullable(z.object({
  reviewId: z.string(),
  tagId: z.string(),
  review: z.unknown(),
  tag: z.unknown()
}));