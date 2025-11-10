import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { LocationScalarRelationFilterObjectSchema as LocationScalarRelationFilterObjectSchema } from './LocationScalarRelationFilter.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { RatingNullableScalarRelationFilterObjectSchema as RatingNullableScalarRelationFilterObjectSchema } from './RatingNullableScalarRelationFilter.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema';
import { ReviewPictureListRelationFilterObjectSchema as ReviewPictureListRelationFilterObjectSchema } from './ReviewPictureListRelationFilter.schema';
import { ReviewTagListRelationFilterObjectSchema as ReviewTagListRelationFilterObjectSchema } from './ReviewTagListRelationFilter.schema'

const reviewwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewWhereInputObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewWhereInputObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  locationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ratingId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  title: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  text: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  location: z.union([z.lazy(() => LocationScalarRelationFilterObjectSchema), z.lazy(() => LocationWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  rating: z.union([z.lazy(() => RatingNullableScalarRelationFilterObjectSchema), z.lazy(() => RatingWhereInputObjectSchema)]).optional(),
  pictures: z.lazy(() => ReviewPictureListRelationFilterObjectSchema).optional(),
  tags: z.lazy(() => ReviewTagListRelationFilterObjectSchema).optional()
}).strict();
export const ReviewWhereInputObjectSchema: z.ZodType<Prisma.ReviewWhereInput> = reviewwhereinputSchema as unknown as z.ZodType<Prisma.ReviewWhereInput>;
export const ReviewWhereInputObjectZodSchema = reviewwhereinputSchema;
