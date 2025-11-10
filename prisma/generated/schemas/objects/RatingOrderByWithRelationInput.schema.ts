import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationOrderByWithRelationInputObjectSchema as LocationOrderByWithRelationInputObjectSchema } from './LocationOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { RatingTagOrderByRelationAggregateInputObjectSchema as RatingTagOrderByRelationAggregateInputObjectSchema } from './RatingTagOrderByRelationAggregateInput.schema';
import { RatingPictureOrderByRelationAggregateInputObjectSchema as RatingPictureOrderByRelationAggregateInputObjectSchema } from './RatingPictureOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  location: z.lazy(() => LocationOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  tags: z.lazy(() => RatingTagOrderByRelationAggregateInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const RatingOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RatingOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingOrderByWithRelationInput>;
export const RatingOrderByWithRelationInputObjectZodSchema = makeSchema();
