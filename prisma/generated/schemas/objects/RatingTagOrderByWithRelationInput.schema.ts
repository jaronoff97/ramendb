import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RatingOrderByWithRelationInputObjectSchema as RatingOrderByWithRelationInputObjectSchema } from './RatingOrderByWithRelationInput.schema';
import { TagOrderByWithRelationInputObjectSchema as TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  ratingId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  rating: z.lazy(() => RatingOrderByWithRelationInputObjectSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RatingTagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RatingTagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagOrderByWithRelationInput>;
export const RatingTagOrderByWithRelationInputObjectZodSchema = makeSchema();
