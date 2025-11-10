import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagWhereInputObjectSchema as LocationTagWhereInputObjectSchema } from './LocationTagWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationTagWhereInputObjectSchema).optional()
}).strict();
export const LocationCountOutputTypeCountTagsArgsObjectSchema = makeSchema();
export const LocationCountOutputTypeCountTagsArgsObjectZodSchema = makeSchema();
