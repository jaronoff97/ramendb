import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RatingOrderByRelationAggregateInputObjectSchema as RatingOrderByRelationAggregateInputObjectSchema } from './RatingOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workosId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pictureUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  ratings: z.lazy(() => RatingOrderByRelationAggregateInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
