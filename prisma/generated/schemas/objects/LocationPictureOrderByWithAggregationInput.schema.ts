import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LocationPictureCountOrderByAggregateInputObjectSchema as LocationPictureCountOrderByAggregateInputObjectSchema } from './LocationPictureCountOrderByAggregateInput.schema';
import { LocationPictureMaxOrderByAggregateInputObjectSchema as LocationPictureMaxOrderByAggregateInputObjectSchema } from './LocationPictureMaxOrderByAggregateInput.schema';
import { LocationPictureMinOrderByAggregateInputObjectSchema as LocationPictureMinOrderByAggregateInputObjectSchema } from './LocationPictureMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  caption: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => LocationPictureCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LocationPictureMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LocationPictureMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LocationPictureOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LocationPictureOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureOrderByWithAggregationInput>;
export const LocationPictureOrderByWithAggregationInputObjectZodSchema = makeSchema();
