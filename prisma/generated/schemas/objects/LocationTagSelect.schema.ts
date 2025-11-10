import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationArgsObjectSchema as LocationArgsObjectSchema } from './LocationArgs.schema';
import { TagArgsObjectSchema as TagArgsObjectSchema } from './TagArgs.schema'

const makeSchema = () => z.object({
  locationId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  location: z.union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional()
}).strict();
export const LocationTagSelectObjectSchema: z.ZodType<Prisma.LocationTagSelect> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagSelect>;
export const LocationTagSelectObjectZodSchema = makeSchema();
