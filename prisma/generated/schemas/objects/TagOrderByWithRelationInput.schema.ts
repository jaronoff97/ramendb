import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LocationTagOrderByRelationAggregateInputObjectSchema as LocationTagOrderByRelationAggregateInputObjectSchema } from './LocationTagOrderByRelationAggregateInput.schema';
import { DishTagOrderByRelationAggregateInputObjectSchema as DishTagOrderByRelationAggregateInputObjectSchema } from './DishTagOrderByRelationAggregateInput.schema';
import { RatingTagOrderByRelationAggregateInputObjectSchema as RatingTagOrderByRelationAggregateInputObjectSchema } from './RatingTagOrderByRelationAggregateInput.schema';
import { ReviewTagOrderByRelationAggregateInputObjectSchema as ReviewTagOrderByRelationAggregateInputObjectSchema } from './ReviewTagOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  category: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  locations: z.lazy(() => LocationTagOrderByRelationAggregateInputObjectSchema).optional(),
  dishes: z.lazy(() => DishTagOrderByRelationAggregateInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingTagOrderByRelationAggregateInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewTagOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagOrderByWithRelationInput>;
export const TagOrderByWithRelationInputObjectZodSchema = makeSchema();
