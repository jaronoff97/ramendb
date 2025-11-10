import * as z from 'zod';
export const RatingTagUpdateResultSchema = z.nullable(z.object({
  ratingId: z.string(),
  tagId: z.string(),
  rating: z.unknown(),
  tag: z.unknown()
}));