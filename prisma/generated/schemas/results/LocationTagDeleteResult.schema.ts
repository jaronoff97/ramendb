import * as z from 'zod';
export const LocationTagDeleteResultSchema = z.nullable(z.object({
  locationId: z.string(),
  tagId: z.string(),
  location: z.unknown(),
  tag: z.unknown()
}));