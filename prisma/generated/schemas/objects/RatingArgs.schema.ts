import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingSelectObjectSchema as RatingSelectObjectSchema } from './RatingSelect.schema';
import { RatingIncludeObjectSchema as RatingIncludeObjectSchema } from './RatingInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RatingSelectObjectSchema).optional(),
  include: z.lazy(() => RatingIncludeObjectSchema).optional()
}).strict();
export const RatingArgsObjectSchema = makeSchema();
export const RatingArgsObjectZodSchema = makeSchema();
