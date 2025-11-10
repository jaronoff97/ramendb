import * as z from 'zod';
export const LocationUpsertResultSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  type: z.string(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  website: z.string().optional(),
  hours: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  dishes: z.array(z.unknown()),
  ratings: z.array(z.unknown()),
  reviews: z.array(z.unknown()),
  tags: z.array(z.unknown()),
  pictures: z.array(z.unknown())
});