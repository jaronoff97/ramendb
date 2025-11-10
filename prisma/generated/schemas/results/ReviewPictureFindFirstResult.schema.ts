import * as z from 'zod';
export const ReviewPictureFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  reviewId: z.string(),
  url: z.string(),
  caption: z.string().optional(),
  createdAt: z.date(),
  review: z.unknown()
}));