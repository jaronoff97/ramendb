import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReviewOrderByWithRelationInputObjectSchema as ReviewOrderByWithRelationInputObjectSchema } from './ReviewOrderByWithRelationInput.schema';
import { TagOrderByWithRelationInputObjectSchema as TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  reviewId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  review: z.lazy(() => ReviewOrderByWithRelationInputObjectSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReviewTagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReviewTagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagOrderByWithRelationInput>;
export const ReviewTagOrderByWithRelationInputObjectZodSchema = makeSchema();
