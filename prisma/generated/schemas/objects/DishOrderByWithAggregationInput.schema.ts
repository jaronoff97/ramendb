import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DishCountOrderByAggregateInputObjectSchema as DishCountOrderByAggregateInputObjectSchema } from './DishCountOrderByAggregateInput.schema';
import { DishAvgOrderByAggregateInputObjectSchema as DishAvgOrderByAggregateInputObjectSchema } from './DishAvgOrderByAggregateInput.schema';
import { DishMaxOrderByAggregateInputObjectSchema as DishMaxOrderByAggregateInputObjectSchema } from './DishMaxOrderByAggregateInput.schema';
import { DishMinOrderByAggregateInputObjectSchema as DishMinOrderByAggregateInputObjectSchema } from './DishMinOrderByAggregateInput.schema';
import { DishSumOrderByAggregateInputObjectSchema as DishSumOrderByAggregateInputObjectSchema } from './DishSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DishCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DishAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DishMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DishMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DishSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DishOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DishOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishOrderByWithAggregationInput>;
export const DishOrderByWithAggregationInputObjectZodSchema = makeSchema();
