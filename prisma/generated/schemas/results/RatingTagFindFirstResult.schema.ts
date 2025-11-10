import * as z from 'zod';
export const RatingTagFindFirstResultSchema = z.nullable(z.object({
  ratingId: z.string(),
  tagId: z.string(),
  rating: z.unknown(),
  tag: z.unknown()
}));