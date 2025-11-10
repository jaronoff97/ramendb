import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DishTagCountOrderByAggregateInputObjectSchema as DishTagCountOrderByAggregateInputObjectSchema } from './DishTagCountOrderByAggregateInput.schema';
import { DishTagMaxOrderByAggregateInputObjectSchema as DishTagMaxOrderByAggregateInputObjectSchema } from './DishTagMaxOrderByAggregateInput.schema';
import { DishTagMinOrderByAggregateInputObjectSchema as DishTagMinOrderByAggregateInputObjectSchema } from './DishTagMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  dishId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  _count: z.lazy(() => DishTagCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DishTagMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DishTagMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DishTagOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DishTagOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagOrderByWithAggregationInput>;
export const DishTagOrderByWithAggregationInputObjectZodSchema = makeSchema();
