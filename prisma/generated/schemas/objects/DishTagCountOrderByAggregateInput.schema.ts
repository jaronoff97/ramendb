import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dishId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional()
}).strict();
export const DishTagCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DishTagCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCountOrderByAggregateInput>;
export const DishTagCountOrderByAggregateInputObjectZodSchema = makeSchema();
