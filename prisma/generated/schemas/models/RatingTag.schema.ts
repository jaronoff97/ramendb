import * as z from 'zod';

export const RatingTagSchema = z.object({
  ratingId: z.string(),
  tagId: z.string(),
});

export type RatingTagType = z.infer<typeof RatingTagSchema>;
