import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RatingTagOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RatingTagOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagOrderByRelationAggregateInput>;
export const RatingTagOrderByRelationAggregateInputObjectZodSchema = makeSchema();
