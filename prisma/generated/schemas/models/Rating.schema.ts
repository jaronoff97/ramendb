import * as z from 'zod';

export const RatingSchema = z.object({
  id: z.string(),
  locationId: z.string(),
  userId: z.string(),
  value: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type RatingType = z.infer<typeof RatingSchema>;
