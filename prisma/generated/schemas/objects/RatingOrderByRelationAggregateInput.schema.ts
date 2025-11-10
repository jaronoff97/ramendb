import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RatingOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RatingOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingOrderByRelationAggregateInput>;
export const RatingOrderByRelationAggregateInputObjectZodSchema = makeSchema();
