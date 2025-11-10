import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RatingPictureCountOrderByAggregateInputObjectSchema as RatingPictureCountOrderByAggregateInputObjectSchema } from './RatingPictureCountOrderByAggregateInput.schema';
import { RatingPictureMaxOrderByAggregateInputObjectSchema as RatingPictureMaxOrderByAggregateInputObjectSchema } from './RatingPictureMaxOrderByAggregateInput.schema';
import { RatingPictureMinOrderByAggregateInputObjectSchema as RatingPictureMinOrderByAggregateInputObjectSchema } from './RatingPictureMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ratingId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  caption: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => RatingPictureCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RatingPictureMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RatingPictureMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RatingPictureOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RatingPictureOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureOrderByWithAggregationInput>;
export const RatingPictureOrderByWithAggregationInputObjectZodSchema = makeSchema();
