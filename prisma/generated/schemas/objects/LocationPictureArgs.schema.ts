import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationPictureSelectObjectSchema as LocationPictureSelectObjectSchema } from './LocationPictureSelect.schema';
import { LocationPictureIncludeObjectSchema as LocationPictureIncludeObjectSchema } from './LocationPictureInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LocationPictureSelectObjectSchema).optional(),
  include: z.lazy(() => LocationPictureIncludeObjectSchema).optional()
}).strict();
export const LocationPictureArgsObjectSchema = makeSchema();
export const LocationPictureArgsObjectZodSchema = makeSchema();
