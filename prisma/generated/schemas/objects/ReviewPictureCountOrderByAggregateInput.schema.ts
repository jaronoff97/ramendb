import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reviewId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  caption: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ReviewPictureCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewPictureCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureCountOrderByAggregateInput>;
export const ReviewPictureCountOrderByAggregateInputObjectZodSchema = makeSchema();
