import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { LocationScalarRelationFilterObjectSchema as LocationScalarRelationFilterObjectSchema } from './LocationScalarRelationFilter.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { TagScalarRelationFilterObjectSchema as TagScalarRelationFilterObjectSchema } from './TagScalarRelationFilter.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const locationtagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LocationTagWhereInputObjectSchema), z.lazy(() => LocationTagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LocationTagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LocationTagWhereInputObjectSchema), z.lazy(() => LocationTagWhereInputObjectSchema).array()]).optional(),
  locationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => LocationScalarRelationFilterObjectSchema), z.lazy(() => LocationWhereInputObjectSchema)]).optional(),
  tag: z.union([z.lazy(() => TagScalarRelationFilterObjectSchema), z.lazy(() => TagWhereInputObjectSchema)]).optional()
}).strict();
export const LocationTagWhereInputObjectSchema: z.ZodType<Prisma.LocationTagWhereInput> = locationtagwhereinputSchema as unknown as z.ZodType<Prisma.LocationTagWhereInput>;
export const LocationTagWhereInputObjectZodSchema = locationtagwhereinputSchema;
