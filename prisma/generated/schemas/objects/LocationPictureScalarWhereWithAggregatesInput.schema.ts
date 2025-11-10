import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const locationpicturescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => LocationPictureScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LocationPictureScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LocationPictureScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LocationPictureScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LocationPictureScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  locationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  caption: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const LocationPictureScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LocationPictureScalarWhereWithAggregatesInput> = locationpicturescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LocationPictureScalarWhereWithAggregatesInput>;
export const LocationPictureScalarWhereWithAggregatesInputObjectZodSchema = locationpicturescalarwherewithaggregatesinputSchema;
