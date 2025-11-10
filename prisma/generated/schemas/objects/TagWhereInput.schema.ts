import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { LocationTagListRelationFilterObjectSchema as LocationTagListRelationFilterObjectSchema } from './LocationTagListRelationFilter.schema';
import { DishTagListRelationFilterObjectSchema as DishTagListRelationFilterObjectSchema } from './DishTagListRelationFilter.schema';
import { RatingTagListRelationFilterObjectSchema as RatingTagListRelationFilterObjectSchema } from './RatingTagListRelationFilter.schema';
import { ReviewTagListRelationFilterObjectSchema as ReviewTagListRelationFilterObjectSchema } from './ReviewTagListRelationFilter.schema'

const tagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TagWhereInputObjectSchema), z.lazy(() => TagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagWhereInputObjectSchema), z.lazy(() => TagWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  category: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  locations: z.lazy(() => LocationTagListRelationFilterObjectSchema).optional(),
  dishes: z.lazy(() => DishTagListRelationFilterObjectSchema).optional(),
  ratings: z.lazy(() => RatingTagListRelationFilterObjectSchema).optional(),
  reviews: z.lazy(() => ReviewTagListRelationFilterObjectSchema).optional()
}).strict();
export const TagWhereInputObjectSchema: z.ZodType<Prisma.TagWhereInput> = tagwhereinputSchema as unknown as z.ZodType<Prisma.TagWhereInput>;
export const TagWhereInputObjectZodSchema = tagwhereinputSchema;
