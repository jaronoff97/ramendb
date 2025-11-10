import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const RatingMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RatingMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingMaxOrderByAggregateInput>;
export const RatingMaxOrderByAggregateInputObjectZodSchema = makeSchema();
