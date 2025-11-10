import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  value: SortOrderSchema.optional()
}).strict();
export const RatingSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RatingSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingSumOrderByAggregateInput>;
export const RatingSumOrderByAggregateInputObjectZodSchema = makeSchema();
