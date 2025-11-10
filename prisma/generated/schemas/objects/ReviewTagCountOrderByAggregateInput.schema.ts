import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  reviewId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional()
}).strict();
export const ReviewTagCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewTagCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCountOrderByAggregateInput>;
export const ReviewTagCountOrderByAggregateInputObjectZodSchema = makeSchema();
