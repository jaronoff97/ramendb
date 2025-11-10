import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DishTagOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DishTagOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagOrderByRelationAggregateInput>;
export const DishTagOrderByRelationAggregateInputObjectZodSchema = makeSchema();
