import * as z from 'zod';
export const RatingFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  locationId: z.string(),
  userId: z.string(),
  value: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  location: z.unknown(),
  user: z.unknown(),
  reviews: z.array(z.unknown()),
  tags: z.array(z.unknown()),
  ratingPictures: z.array(z.unknown())
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