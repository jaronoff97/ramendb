import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DishMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DishMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DishMinOrderByAggregateInput>;
export const DishMinOrderByAggregateInputObjectZodSchema = makeSchema();
