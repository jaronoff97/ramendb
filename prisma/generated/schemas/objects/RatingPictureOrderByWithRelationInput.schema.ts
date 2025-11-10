import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RatingOrderByWithRelationInputObjectSchema as RatingOrderByWithRelationInputObjectSchema } from './RatingOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ratingId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  caption: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  rating: z.lazy(() => RatingOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RatingPictureOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RatingPictureOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureOrderByWithRelationInput>;
export const RatingPictureOrderByWithRelationInputObjectZodSchema = makeSchema();
