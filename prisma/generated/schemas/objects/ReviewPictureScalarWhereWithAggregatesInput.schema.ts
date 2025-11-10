import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const reviewpicturescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewPictureScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewPictureScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewPictureScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewPictureScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewPictureScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  reviewId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  caption: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReviewPictureScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReviewPictureScalarWhereWithAggregatesInput> = reviewpicturescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReviewPictureScalarWhereWithAggregatesInput>;
export const ReviewPictureScalarWhereWithAggregatesInputObjectZodSchema = reviewpicturescalarwherewithaggregatesinputSchema;
