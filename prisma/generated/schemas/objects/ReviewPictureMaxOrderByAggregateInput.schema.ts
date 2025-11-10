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
export const ReviewPictureMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewPictureMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureMaxOrderByAggregateInput>;
export const ReviewPictureMaxOrderByAggregateInputObjectZodSchema = makeSchema();
