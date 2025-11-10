import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RatingCountOrderByAggregateInputObjectSchema as RatingCountOrderByAggregateInputObjectSchema } from './RatingCountOrderByAggregateInput.schema';
import { RatingAvgOrderByAggregateInputObjectSchema as RatingAvgOrderByAggregateInputObjectSchema } from './RatingAvgOrderByAggregateInput.schema';
import { RatingMaxOrderByAggregateInputObjectSchema as RatingMaxOrderByAggregateInputObjectSchema } from './RatingMaxOrderByAggregateInput.schema';
import { RatingMinOrderByAggregateInputObjectSchema as RatingMinOrderByAggregateInputObjectSchema } from './RatingMinOrderByAggregateInput.schema';
import { RatingSumOrderByAggregateInputObjectSchema as RatingSumOrderByAggregateInputObjectSchema } from './RatingSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => RatingCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RatingAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RatingMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RatingMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RatingSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RatingOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RatingOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingOrderByWithAggregationInput>;
export const RatingOrderByWithAggregationInputObjectZodSchema = makeSchema();
