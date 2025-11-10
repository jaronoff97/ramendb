import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ratingId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional()
}).strict();
export const RatingTagCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RatingTagCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCountOrderByAggregateInput>;
export const RatingTagCountOrderByAggregateInputObjectZodSchema = makeSchema();
