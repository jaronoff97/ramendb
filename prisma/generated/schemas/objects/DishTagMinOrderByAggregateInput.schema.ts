import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dishId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional()
}).strict();
export const DishTagMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DishTagMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagMinOrderByAggregateInput>;
export const DishTagMinOrderByAggregateInputObjectZodSchema = makeSchema();
