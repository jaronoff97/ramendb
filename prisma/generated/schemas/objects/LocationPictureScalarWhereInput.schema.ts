import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const locationpicturescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LocationPictureScalarWhereInputObjectSchema), z.lazy(() => LocationPictureScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LocationPictureScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LocationPictureScalarWhereInputObjectSchema), z.lazy(() => LocationPictureScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  locationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  caption: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const LocationPictureScalarWhereInputObjectSchema: z.ZodType<Prisma.LocationPictureScalarWhereInput> = locationpicturescalarwhereinputSchema as unknown as z.ZodType<Prisma.LocationPictureScalarWhereInput>;
export const LocationPictureScalarWhereInputObjectZodSchema = locationpicturescalarwhereinputSchema;
