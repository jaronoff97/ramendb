import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { LocationScalarRelationFilterObjectSchema as LocationScalarRelationFilterObjectSchema } from './LocationScalarRelationFilter.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ReviewListRelationFilterObjectSchema as ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';
import { RatingTagListRelationFilterObjectSchema as RatingTagListRelationFilterObjectSchema } from './RatingTagListRelationFilter.schema';
import { RatingPictureListRelationFilterObjectSchema as RatingPictureListRelationFilterObjectSchema } from './RatingPictureListRelationFilter.schema'

const ratingwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RatingWhereInputObjectSchema), z.lazy(() => RatingWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RatingWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RatingWhereInputObjectSchema), z.lazy(() => RatingWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  locationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  location: z.union([z.lazy(() => LocationScalarRelationFilterObjectSchema), z.lazy(() => LocationWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  tags: z.lazy(() => RatingTagListRelationFilterObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureListRelationFilterObjectSchema).optional()
}).strict();
export const RatingWhereInputObjectSchema: z.ZodType<Prisma.RatingWhereInput> = ratingwhereinputSchema as unknown as z.ZodType<Prisma.RatingWhereInput>;
export const RatingWhereInputObjectZodSchema = ratingwhereinputSchema;
