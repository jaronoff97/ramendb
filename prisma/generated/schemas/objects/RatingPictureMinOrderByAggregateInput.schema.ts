import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ratingId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  caption: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const RatingPictureMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RatingPictureMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureMinOrderByAggregateInput>;
export const RatingPictureMinOrderByAggregateInputObjectZodSchema = makeSchema();
