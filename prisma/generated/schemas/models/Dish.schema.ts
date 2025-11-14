import * as z from 'zod';
import { Prisma } from '@prisma/client';

export const DishSchema = z.object({
  id: z.string(),
  locationId: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  price: z.instanceof(Prisma.Decimal, {
  message: "Field 'price' must be a Decimal. Location: ['Models', 'Dish']",
}).nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type DishType = z.infer<typeof DishSchema>;
