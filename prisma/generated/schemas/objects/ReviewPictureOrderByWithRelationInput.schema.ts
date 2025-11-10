import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReviewOrderByWithRelationInputObjectSchema as ReviewOrderByWithRelationInputObjectSchema } from './ReviewOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reviewId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  caption: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  review: z.lazy(() => ReviewOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReviewPictureOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReviewPictureOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureOrderByWithRelationInput>;
export const ReviewPictureOrderByWithRelationInputObjectZodSchema = makeSchema();
