import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DishOrderByRelationAggregateInputObjectSchema as DishOrderByRelationAggregateInputObjectSchema } from './DishOrderByRelationAggregateInput.schema';
import { RatingOrderByRelationAggregateInputObjectSchema as RatingOrderByRelationAggregateInputObjectSchema } from './RatingOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { LocationTagOrderByRelationAggregateInputObjectSchema as LocationTagOrderByRelationAggregateInputObjectSchema } from './LocationTagOrderByRelationAggregateInput.schema';
import { LocationPictureOrderByRelationAggregateInputObjectSchema as LocationPictureOrderByRelationAggregateInputObjectSchema } from './LocationPictureOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  osmId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
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
  dishes: z.lazy(() => DishOrderByRelationAggregateInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingOrderByRelationAggregateInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  tags: z.lazy(() => LocationTagOrderByRelationAggregateInputObjectSchema).optional(),
  pictures: z.lazy(() => LocationPictureOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const LocationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LocationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationOrderByWithRelationInput>;
export const LocationOrderByWithRelationInputObjectZodSchema = makeSchema();
