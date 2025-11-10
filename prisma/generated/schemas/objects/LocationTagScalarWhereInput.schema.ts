import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const locationtagscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LocationTagScalarWhereInputObjectSchema), z.lazy(() => LocationTagScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LocationTagScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LocationTagScalarWhereInputObjectSchema), z.lazy(() => LocationTagScalarWhereInputObjectSchema).array()]).optional(),
  locationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const LocationTagScalarWhereInputObjectSchema: z.ZodType<Prisma.LocationTagScalarWhereInput> = locationtagscalarwhereinputSchema as unknown as z.ZodType<Prisma.LocationTagScalarWhereInput>;
export const LocationTagScalarWhereInputObjectZodSchema = locationtagscalarwhereinputSchema;
