import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const LocationPictureOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.LocationPictureOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureOrderByRelationAggregateInput>;
export const LocationPictureOrderByRelationAggregateInputObjectZodSchema = makeSchema();
