import * as z from 'zod';

export const RatingPictureSchema = z.object({
  id: z.string(),
  ratingId: z.string(),
  url: z.string(),
  caption: z.string().nullish(),
  createdAt: z.date(),
});

export type RatingPictureType = z.infer<typeof RatingPictureSchema>;
