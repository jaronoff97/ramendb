import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  workosId: z.string(),
  email: z.string(),
  name: z.string().optional(),
  pictureUrl: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ratings: z.array(z.unknown()),
  reviews: z.array(z.unknown())
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