import * as z from 'zod';
export const ReviewDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  locationId: z.string(),
  userId: z.string(),
  ratingId: z.string().optional(),
  title: z.string().optional(),
  text: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  location: z.unknown(),
  user: z.unknown(),
  rating: z.unknown().optional(),
  pictures: z.array(z.unknown()),
  tags: z.array(z.unknown())
}));