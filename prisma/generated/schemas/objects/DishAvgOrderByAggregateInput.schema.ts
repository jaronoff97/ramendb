import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  price: SortOrderSchema.optional()
}).strict();
export const DishAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DishAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DishAvgOrderByAggregateInput>;
export const DishAvgOrderByAggregateInputObjectZodSchema = makeSchema();
