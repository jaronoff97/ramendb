import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  locationId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional()
}).strict();
export const LocationTagMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LocationTagMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagMinOrderByAggregateInput>;
export const LocationTagMinOrderByAggregateInputObjectZodSchema = makeSchema();
