import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dishId: z.literal(true).optional(),
  tagId: z.literal(true).optional()
}).strict();
export const DishTagMinAggregateInputObjectSchema: z.ZodType<Prisma.DishTagMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DishTagMinAggregateInputType>;
export const DishTagMinAggregateInputObjectZodSchema = makeSchema();
