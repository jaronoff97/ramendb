import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  ratingId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ReviewMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMaxOrderByAggregateInput>;
export const ReviewMaxOrderByAggregateInputObjectZodSchema = makeSchema();
