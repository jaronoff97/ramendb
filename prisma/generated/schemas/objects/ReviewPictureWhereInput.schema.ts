import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ReviewScalarRelationFilterObjectSchema as ReviewScalarRelationFilterObjectSchema } from './ReviewScalarRelationFilter.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema'

const reviewpicturewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewPictureWhereInputObjectSchema), z.lazy(() => ReviewPictureWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewPictureWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewPictureWhereInputObjectSchema), z.lazy(() => ReviewPictureWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reviewId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  caption: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  review: z.union([z.lazy(() => ReviewScalarRelationFilterObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema)]).optional()
}).strict();
export const ReviewPictureWhereInputObjectSchema: z.ZodType<Prisma.ReviewPictureWhereInput> = reviewpicturewhereinputSchema as unknown as z.ZodType<Prisma.ReviewPictureWhereInput>;
export const ReviewPictureWhereInputObjectZodSchema = reviewpicturewhereinputSchema;
