import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const locationtagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => LocationTagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LocationTagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LocationTagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LocationTagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LocationTagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  locationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const LocationTagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LocationTagScalarWhereWithAggregatesInput> = locationtagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LocationTagScalarWhereWithAggregatesInput>;
export const LocationTagScalarWhereWithAggregatesInputObjectZodSchema = locationtagscalarwherewithaggregatesinputSchema;
