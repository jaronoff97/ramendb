import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RatingTagCountOrderByAggregateInputObjectSchema as RatingTagCountOrderByAggregateInputObjectSchema } from './RatingTagCountOrderByAggregateInput.schema';
import { RatingTagMaxOrderByAggregateInputObjectSchema as RatingTagMaxOrderByAggregateInputObjectSchema } from './RatingTagMaxOrderByAggregateInput.schema';
import { RatingTagMinOrderByAggregateInputObjectSchema as RatingTagMinOrderByAggregateInputObjectSchema } from './RatingTagMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ratingId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  _count: z.lazy(() => RatingTagCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RatingTagMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RatingTagMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RatingTagOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RatingTagOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagOrderByWithAggregationInput>;
export const RatingTagOrderByWithAggregationInputObjectZodSchema = makeSchema();
