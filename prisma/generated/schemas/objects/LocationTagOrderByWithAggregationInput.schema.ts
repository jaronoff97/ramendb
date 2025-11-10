import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationTagCountOrderByAggregateInputObjectSchema as LocationTagCountOrderByAggregateInputObjectSchema } from './LocationTagCountOrderByAggregateInput.schema';
import { LocationTagMaxOrderByAggregateInputObjectSchema as LocationTagMaxOrderByAggregateInputObjectSchema } from './LocationTagMaxOrderByAggregateInput.schema';
import { LocationTagMinOrderByAggregateInputObjectSchema as LocationTagMinOrderByAggregateInputObjectSchema } from './LocationTagMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  locationId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  _count: z.lazy(() => LocationTagCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LocationTagMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LocationTagMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LocationTagOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LocationTagOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagOrderByWithAggregationInput>;
export const LocationTagOrderByWithAggregationInputObjectZodSchema = makeSchema();
