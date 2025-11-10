import * as z from 'zod';
export const LocationTagCreateResultSchema = z.object({
  locationId: z.string(),
  tagId: z.string(),
  location: z.unknown(),
  tag: z.unknown()
});