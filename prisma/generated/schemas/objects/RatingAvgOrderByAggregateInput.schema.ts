import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  value: SortOrderSchema.optional()
}).strict();
export const RatingAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RatingAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingAvgOrderByAggregateInput>;
export const RatingAvgOrderByAggregateInputObjectZodSchema = makeSchema();
