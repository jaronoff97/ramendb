import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const ratingpicturescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RatingPictureScalarWhereInputObjectSchema), z.lazy(() => RatingPictureScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RatingPictureScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RatingPictureScalarWhereInputObjectSchema), z.lazy(() => RatingPictureScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ratingId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  caption: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RatingPictureScalarWhereInputObjectSchema: z.ZodType<Prisma.RatingPictureScalarWhereInput> = ratingpicturescalarwhereinputSchema as unknown as z.ZodType<Prisma.RatingPictureScalarWhereInput>;
export const RatingPictureScalarWhereInputObjectZodSchema = ratingpicturescalarwhereinputSchema;
