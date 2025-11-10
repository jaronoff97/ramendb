import * as z from 'zod';
export const TagFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  category: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  locations: z.array(z.unknown()),
  dishes: z.array(z.unknown()),
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