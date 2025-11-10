import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { LocationScalarRelationFilterObjectSchema as LocationScalarRelationFilterObjectSchema } from './LocationScalarRelationFilter.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema'

const locationpicturewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LocationPictureWhereInputObjectSchema), z.lazy(() => LocationPictureWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LocationPictureWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LocationPictureWhereInputObjectSchema), z.lazy(() => LocationPictureWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  locationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  caption: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  location: z.union([z.lazy(() => LocationScalarRelationFilterObjectSchema), z.lazy(() => LocationWhereInputObjectSchema)]).optional()
}).strict();
export const LocationPictureWhereInputObjectSchema: z.ZodType<Prisma.LocationPictureWhereInput> = locationpicturewhereinputSchema as unknown as z.ZodType<Prisma.LocationPictureWhereInput>;
export const LocationPictureWhereInputObjectZodSchema = locationpicturewhereinputSchema;
