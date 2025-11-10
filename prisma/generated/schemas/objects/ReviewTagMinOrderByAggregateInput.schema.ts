import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  reviewId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional()
}).strict();
export const ReviewTagMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewTagMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagMinOrderByAggregateInput>;
export const ReviewTagMinOrderByAggregateInputObjectZodSchema = makeSchema();
