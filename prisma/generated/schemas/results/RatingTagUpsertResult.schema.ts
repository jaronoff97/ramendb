import * as z from 'zod';
export const RatingTagUpsertResultSchema = z.object({
  ratingId: z.string(),
  tagId: z.string(),
  rating: z.unknown(),
  tag: z.unknown()
});