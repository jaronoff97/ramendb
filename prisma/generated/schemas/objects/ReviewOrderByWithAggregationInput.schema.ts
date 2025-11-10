import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReviewCountOrderByAggregateInputObjectSchema as ReviewCountOrderByAggregateInputObjectSchema } from './ReviewCountOrderByAggregateInput.schema';
import { ReviewMaxOrderByAggregateInputObjectSchema as ReviewMaxOrderByAggregateInputObjectSchema } from './ReviewMaxOrderByAggregateInput.schema';
import { ReviewMinOrderByAggregateInputObjectSchema as ReviewMinOrderByAggregateInputObjectSchema } from './ReviewMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  ratingId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  text: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ReviewCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReviewMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReviewMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReviewOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReviewOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewOrderByWithAggregationInput>;
export const ReviewOrderByWithAggregationInputObjectZodSchema = makeSchema();
