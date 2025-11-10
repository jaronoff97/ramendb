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
export const RatingCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RatingCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCountOrderByAggregateInput>;
export const RatingCountOrderByAggregateInputObjectZodSchema = makeSchema();
