import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RatingScalarRelationFilterObjectSchema as RatingScalarRelationFilterObjectSchema } from './RatingScalarRelationFilter.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema'

const ratingpicturewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RatingPictureWhereInputObjectSchema), z.lazy(() => RatingPictureWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RatingPictureWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RatingPictureWhereInputObjectSchema), z.lazy(() => RatingPictureWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ratingId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  caption: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  rating: z.union([z.lazy(() => RatingScalarRelationFilterObjectSchema), z.lazy(() => RatingWhereInputObjectSchema)]).optional()
}).strict();
export const RatingPictureWhereInputObjectSchema: z.ZodType<Prisma.RatingPictureWhereInput> = ratingpicturewhereinputSchema as unknown as z.ZodType<Prisma.RatingPictureWhereInput>;
export const RatingPictureWhereInputObjectZodSchema = ratingpicturewhereinputSchema;
