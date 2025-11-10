import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReviewTagCountOrderByAggregateInputObjectSchema as ReviewTagCountOrderByAggregateInputObjectSchema } from './ReviewTagCountOrderByAggregateInput.schema';
import { ReviewTagMaxOrderByAggregateInputObjectSchema as ReviewTagMaxOrderByAggregateInputObjectSchema } from './ReviewTagMaxOrderByAggregateInput.schema';
import { ReviewTagMinOrderByAggregateInputObjectSchema as ReviewTagMinOrderByAggregateInputObjectSchema } from './ReviewTagMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  reviewId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  _count: z.lazy(() => ReviewTagCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReviewTagMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReviewTagMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReviewTagOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReviewTagOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagOrderByWithAggregationInput>;
export const ReviewTagOrderByWithAggregationInputObjectZodSchema = makeSchema();
