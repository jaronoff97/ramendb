import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  latitude: SortOrderSchema.optional(),
  longitude: SortOrderSchema.optional(),
  website: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const LocationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LocationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationMaxOrderByAggregateInput>;
export const LocationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
