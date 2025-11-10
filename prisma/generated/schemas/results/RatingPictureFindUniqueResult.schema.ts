import * as z from 'zod';
export const RatingPictureFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  ratingId: z.string(),
  url: z.string(),
  caption: z.string().optional(),
  createdAt: z.date(),
  rating: z.unknown()
}));