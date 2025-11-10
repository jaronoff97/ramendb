import * as z from 'zod';
export const LocationPictureCreateResultSchema = z.object({
  id: z.string(),
  locationId: z.string(),
  url: z.string(),
  caption: z.string().optional(),
  createdAt: z.date(),
  location: z.unknown()
});