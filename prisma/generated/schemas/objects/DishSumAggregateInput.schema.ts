import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  price: z.literal(true).optional()
}).strict();
export const DishSumAggregateInputObjectSchema: z.ZodType<Prisma.DishSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DishSumAggregateInputType>;
export const DishSumAggregateInputObjectZodSchema = makeSchema();
