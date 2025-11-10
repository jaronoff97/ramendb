import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  caption: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const LocationPictureMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LocationPictureMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureMaxOrderByAggregateInput>;
export const LocationPictureMaxOrderByAggregateInputObjectZodSchema = makeSchema();
