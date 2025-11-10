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
export const LocationPictureMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LocationPictureMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureMinOrderByAggregateInput>;
export const LocationPictureMinOrderByAggregateInputObjectZodSchema = makeSchema();
