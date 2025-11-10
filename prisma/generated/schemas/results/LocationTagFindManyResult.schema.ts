import * as z from 'zod';
export const LocationTagFindManyResultSchema = z.object({
  data: z.array(z.object({
  locationId: z.string(),
  tagId: z.string(),
  location: z.unknown(),
  tag: z.unknown()
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