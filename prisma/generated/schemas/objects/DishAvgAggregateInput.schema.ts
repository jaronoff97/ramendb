import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  price: z.literal(true).optional()
}).strict();
export const DishAvgAggregateInputObjectSchema: z.ZodType<Prisma.DishAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DishAvgAggregateInputType>;
export const DishAvgAggregateInputObjectZodSchema = makeSchema();
