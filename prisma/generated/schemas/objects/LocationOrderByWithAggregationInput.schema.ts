import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LocationCountOrderByAggregateInputObjectSchema as LocationCountOrderByAggregateInputObjectSchema } from './LocationCountOrderByAggregateInput.schema';
import { LocationAvgOrderByAggregateInputObjectSchema as LocationAvgOrderByAggregateInputObjectSchema } from './LocationAvgOrderByAggregateInput.schema';
import { LocationMaxOrderByAggregateInputObjectSchema as LocationMaxOrderByAggregateInputObjectSchema } from './LocationMaxOrderByAggregateInput.schema';
import { LocationMinOrderByAggregateInputObjectSchema as LocationMinOrderByAggregateInputObjectSchema } from './LocationMinOrderByAggregateInput.schema';
import { LocationSumOrderByAggregateInputObjectSchema as LocationSumOrderByAggregateInputObjectSchema } from './LocationSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  state: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  country: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  latitude: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  longitude: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  website: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hours: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => LocationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => LocationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LocationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LocationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => LocationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LocationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LocationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationOrderByWithAggregationInput>;
export const LocationOrderByWithAggregationInputObjectZodSchema = makeSchema();
