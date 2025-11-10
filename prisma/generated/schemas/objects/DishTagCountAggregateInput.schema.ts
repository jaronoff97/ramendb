import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dishId: z.literal(true).optional(),
  tagId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DishTagCountAggregateInputObjectSchema: z.ZodType<Prisma.DishTagCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCountAggregateInputType>;
export const DishTagCountAggregateInputObjectZodSchema = makeSchema();
