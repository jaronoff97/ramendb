import * as z from 'zod';

export const ReviewSchema = z.object({
  id: z.string(),
  locationId: z.string(),
  userId: z.string(),
  ratingId: z.string().nullish(),
  title: z.string().nullish(),
  text: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ReviewType = z.infer<typeof ReviewSchema>;
