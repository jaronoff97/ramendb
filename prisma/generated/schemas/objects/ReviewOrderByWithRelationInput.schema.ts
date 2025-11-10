import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LocationOrderByWithRelationInputObjectSchema as LocationOrderByWithRelationInputObjectSchema } from './LocationOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { RatingOrderByWithRelationInputObjectSchema as RatingOrderByWithRelationInputObjectSchema } from './RatingOrderByWithRelationInput.schema';
import { ReviewPictureOrderByRelationAggregateInputObjectSchema as ReviewPictureOrderByRelationAggregateInputObjectSchema } from './ReviewPictureOrderByRelationAggregateInput.schema';
import { ReviewTagOrderByRelationAggregateInputObjectSchema as ReviewTagOrderByRelationAggregateInputObjectSchema } from './ReviewTagOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  ratingId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  text: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  location: z.lazy(() => LocationOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  rating: z.lazy(() => RatingOrderByWithRelationInputObjectSchema).optional(),
  pictures: z.lazy(() => ReviewPictureOrderByRelationAggregateInputObjectSchema).optional(),
  tags: z.lazy(() => ReviewTagOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ReviewOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReviewOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewOrderByWithRelationInput>;
export const ReviewOrderByWithRelationInputObjectZodSchema = makeSchema();
