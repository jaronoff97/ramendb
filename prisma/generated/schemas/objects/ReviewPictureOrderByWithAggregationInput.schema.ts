import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReviewPictureCountOrderByAggregateInputObjectSchema as ReviewPictureCountOrderByAggregateInputObjectSchema } from './ReviewPictureCountOrderByAggregateInput.schema';
import { ReviewPictureMaxOrderByAggregateInputObjectSchema as ReviewPictureMaxOrderByAggregateInputObjectSchema } from './ReviewPictureMaxOrderByAggregateInput.schema';
import { ReviewPictureMinOrderByAggregateInputObjectSchema as ReviewPictureMinOrderByAggregateInputObjectSchema } from './ReviewPictureMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reviewId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  caption: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ReviewPictureCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReviewPictureMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReviewPictureMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReviewPictureOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReviewPictureOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureOrderByWithAggregationInput>;
export const ReviewPictureOrderByWithAggregationInputObjectZodSchema = makeSchema();
