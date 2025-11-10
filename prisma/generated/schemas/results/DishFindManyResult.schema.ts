import * as z from 'zod';
export const DishFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  locationId: z.string(),
  name: z.string(),
  description: z.string().optional(),
  price: z.number().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  location: z.unknown(),
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