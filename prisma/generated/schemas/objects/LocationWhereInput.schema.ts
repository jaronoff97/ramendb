import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DishListRelationFilterObjectSchema as DishListRelationFilterObjectSchema } from './DishListRelationFilter.schema';
import { RatingListRelationFilterObjectSchema as RatingListRelationFilterObjectSchema } from './RatingListRelationFilter.schema';
import { ReviewListRelationFilterObjectSchema as ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';
import { LocationTagListRelationFilterObjectSchema as LocationTagListRelationFilterObjectSchema } from './LocationTagListRelationFilter.schema';
import { LocationPictureListRelationFilterObjectSchema as LocationPictureListRelationFilterObjectSchema } from './LocationPictureListRelationFilter.schema'

const locationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LocationWhereInputObjectSchema), z.lazy(() => LocationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LocationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LocationWhereInputObjectSchema), z.lazy(() => LocationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  osmId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  state: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  country: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  latitude: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  longitude: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  website: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  hours: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  dishes: z.lazy(() => DishListRelationFilterObjectSchema).optional(),
  ratings: z.lazy(() => RatingListRelationFilterObjectSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  tags: z.lazy(() => LocationTagListRelationFilterObjectSchema).optional(),
  pictures: z.lazy(() => LocationPictureListRelationFilterObjectSchema).optional()
}).strict();
export const LocationWhereInputObjectSchema: z.ZodType<Prisma.LocationWhereInput> = locationwhereinputSchema as unknown as z.ZodType<Prisma.LocationWhereInput>;
export const LocationWhereInputObjectZodSchema = locationwhereinputSchema;
