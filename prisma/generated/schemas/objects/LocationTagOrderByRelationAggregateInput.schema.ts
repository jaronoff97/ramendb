import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const LocationTagOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.LocationTagOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagOrderByRelationAggregateInput>;
export const LocationTagOrderByRelationAggregateInputObjectZodSchema = makeSchema();
