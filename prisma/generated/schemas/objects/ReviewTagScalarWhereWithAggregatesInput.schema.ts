import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const reviewtagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewTagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewTagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewTagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewTagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewTagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  reviewId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ReviewTagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReviewTagScalarWhereWithAggregatesInput> = reviewtagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReviewTagScalarWhereWithAggregatesInput>;
export const ReviewTagScalarWhereWithAggregatesInputObjectZodSchema = reviewtagscalarwherewithaggregatesinputSchema;
