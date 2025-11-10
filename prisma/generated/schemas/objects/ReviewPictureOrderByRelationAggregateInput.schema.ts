import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReviewPictureOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReviewPictureOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureOrderByRelationAggregateInput>;
export const ReviewPictureOrderByRelationAggregateInputObjectZodSchema = makeSchema();
