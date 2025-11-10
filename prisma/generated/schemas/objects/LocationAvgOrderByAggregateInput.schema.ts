import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  latitude: SortOrderSchema.optional(),
  longitude: SortOrderSchema.optional()
}).strict();
export const LocationAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LocationAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationAvgOrderByAggregateInput>;
export const LocationAvgOrderByAggregateInputObjectZodSchema = makeSchema();
