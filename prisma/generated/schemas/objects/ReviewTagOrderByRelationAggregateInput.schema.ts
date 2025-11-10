import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReviewTagOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReviewTagOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagOrderByRelationAggregateInput>;
export const ReviewTagOrderByRelationAggregateInputObjectZodSchema = makeSchema();
