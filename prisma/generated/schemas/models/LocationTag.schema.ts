import * as z from 'zod';

export const LocationTagSchema = z.object({
  locationId: z.string(),
  tagId: z.string(),
});

export type LocationTagType = z.infer<typeof LocationTagSchema>;
