import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => LocationWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => LocationWhereInputObjectSchema).optional()
}).strict();
export const LocationScalarRelationFilterObjectSchema: z.ZodType<Prisma.LocationScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LocationScalarRelationFilter>;
export const LocationScalarRelationFilterObjectZodSchema = makeSchema();
