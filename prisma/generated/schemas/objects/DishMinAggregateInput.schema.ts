import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  locationId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  price: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const DishMinAggregateInputObjectSchema: z.ZodType<Prisma.DishMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DishMinAggregateInputType>;
export const DishMinAggregateInputObjectZodSchema = makeSchema();
