import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const ratingpicturescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RatingPictureScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RatingPictureScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RatingPictureScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RatingPictureScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RatingPictureScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  ratingId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  caption: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RatingPictureScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RatingPictureScalarWhereWithAggregatesInput> = ratingpicturescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RatingPictureScalarWhereWithAggregatesInput>;
export const RatingPictureScalarWhereWithAggregatesInputObjectZodSchema = ratingpicturescalarwherewithaggregatesinputSchema;
