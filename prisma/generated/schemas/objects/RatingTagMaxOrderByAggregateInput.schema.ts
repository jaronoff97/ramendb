import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ratingId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional()
}).strict();
export const RatingTagMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RatingTagMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagMaxOrderByAggregateInput>;
export const RatingTagMaxOrderByAggregateInputObjectZodSchema = makeSchema();
