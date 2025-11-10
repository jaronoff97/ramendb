import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const ratingtagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RatingTagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RatingTagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RatingTagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RatingTagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RatingTagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ratingId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const RatingTagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RatingTagScalarWhereWithAggregatesInput> = ratingtagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RatingTagScalarWhereWithAggregatesInput>;
export const RatingTagScalarWhereWithAggregatesInputObjectZodSchema = ratingtagscalarwherewithaggregatesinputSchema;
