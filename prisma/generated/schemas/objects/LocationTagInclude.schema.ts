import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationArgsObjectSchema as LocationArgsObjectSchema } from './LocationArgs.schema';
import { TagArgsObjectSchema as TagArgsObjectSchema } from './TagArgs.schema'

const makeSchema = () => z.object({
  location: z.union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional()
}).strict();
export const LocationTagIncludeObjectSchema: z.ZodType<Prisma.LocationTagInclude> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagInclude>;
export const LocationTagIncludeObjectZodSchema = makeSchema();
