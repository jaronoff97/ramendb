import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const reviewscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  locationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  ratingId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  title: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  text: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReviewScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput> = reviewscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput>;
export const ReviewScalarWhereWithAggregatesInputObjectZodSchema = reviewscalarwherewithaggregatesinputSchema;
