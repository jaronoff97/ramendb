import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagWhereInputObjectSchema as LocationTagWhereInputObjectSchema } from './LocationTagWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => LocationTagWhereInputObjectSchema).optional(),
  some: z.lazy(() => LocationTagWhereInputObjectSchema).optional(),
  none: z.lazy(() => LocationTagWhereInputObjectSchema).optional()
}).strict();
export const LocationTagListRelationFilterObjectSchema: z.ZodType<Prisma.LocationTagListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagListRelationFilter>;
export const LocationTagListRelationFilterObjectZodSchema = makeSchema();
