import * as z from 'zod';
export const TagFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  category: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  locations: z.array(z.unknown()),
  dishes: z.array(z.unknown()),
  ratings: z.array(z.unknown()),
  reviews: z.array(z.unknown())
}));