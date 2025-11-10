import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCountOutputTypeSelectObjectSchema as RatingCountOutputTypeSelectObjectSchema } from './RatingCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RatingCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const RatingCountOutputTypeArgsObjectSchema = makeSchema();
export const RatingCountOutputTypeArgsObjectZodSchema = makeSchema();
