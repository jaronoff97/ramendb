import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dishId: z.literal(true).optional(),
  tagId: z.literal(true).optional()
}).strict();
export const DishTagMaxAggregateInputObjectSchema: z.ZodType<Prisma.DishTagMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DishTagMaxAggregateInputType>;
export const DishTagMaxAggregateInputObjectZodSchema = makeSchema();
