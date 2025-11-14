import * as z from 'zod';

export const ReviewPictureSchema = z.object({
  id: z.string(),
  reviewId: z.string(),
  url: z.string(),
  caption: z.string().nullish(),
  createdAt: z.date(),
});

export type ReviewPictureType = z.infer<typeof ReviewPictureSchema>;
