import * as z from 'zod';
export const DishFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  locationId: z.string(),
  name: z.string(),
  description: z.string().optional(),
  price: z.number().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  location: z.unknown(),
  tags: z.array(z.unknown())
}));