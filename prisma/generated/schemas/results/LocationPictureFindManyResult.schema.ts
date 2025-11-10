import * as z from 'zod';
export const LocationPictureFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  locationId: z.string(),
  url: z.string(),
  caption: z.string().optional(),
  createdAt: z.date(),
  location: z.unknown()
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