import * as z from 'zod';
export const RatingPictureFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  ratingId: z.string(),
  url: z.string(),
  caption: z.string().optional(),
  createdAt: z.date(),
  rating: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});