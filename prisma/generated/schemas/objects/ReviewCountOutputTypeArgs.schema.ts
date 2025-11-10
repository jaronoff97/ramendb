import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCountOutputTypeSelectObjectSchema as ReviewCountOutputTypeSelectObjectSchema } from './ReviewCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReviewCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ReviewCountOutputTypeArgsObjectSchema = makeSchema();
export const ReviewCountOutputTypeArgsObjectZodSchema = makeSchema();
