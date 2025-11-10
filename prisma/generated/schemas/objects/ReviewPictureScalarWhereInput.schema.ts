import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const reviewpicturescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewPictureScalarWhereInputObjectSchema), z.lazy(() => ReviewPictureScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewPictureScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewPictureScalarWhereInputObjectSchema), z.lazy(() => ReviewPictureScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reviewId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  caption: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReviewPictureScalarWhereInputObjectSchema: z.ZodType<Prisma.ReviewPictureScalarWhereInput> = reviewpicturescalarwhereinputSchema as unknown as z.ZodType<Prisma.ReviewPictureScalarWhereInput>;
export const ReviewPictureScalarWhereInputObjectZodSchema = reviewpicturescalarwhereinputSchema;
