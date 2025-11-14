import * as z from 'zod';

export const LocationPictureSchema = z.object({
  id: z.string(),
  locationId: z.string(),
  url: z.string(),
  caption: z.string().nullish(),
  createdAt: z.date(),
});

export type LocationPictureType = z.infer<typeof LocationPictureSchema>;
