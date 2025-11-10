import * as z from 'zod';
export const ReviewFindManyResultSchema = z.object({
  data: z.array(z.object({
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