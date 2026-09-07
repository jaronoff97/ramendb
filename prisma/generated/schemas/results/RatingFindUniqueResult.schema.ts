import * as z from 'zod';
export const RatingFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  locationId: z.string(),
  userId: z.string(),
  value: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  location: z.unknown(),
  user: z.unknown(),
  reviews: z.array(z.unknown()),
  tags: z.array(z.unknown()),
  ratingPictures: z.array(z.unknown())
}));