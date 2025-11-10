import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationArgsObjectSchema as LocationArgsObjectSchema } from './LocationArgs.schema'

const makeSchema = () => z.object({
  location: z.union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)]).optional()
}).strict();
export const LocationPictureIncludeObjectSchema: z.ZodType<Prisma.LocationPictureInclude> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureInclude>;
export const LocationPictureIncludeObjectZodSchema = makeSchema();
