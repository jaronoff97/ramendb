import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingArgsObjectSchema as RatingArgsObjectSchema } from './RatingArgs.schema';
import { TagArgsObjectSchema as TagArgsObjectSchema } from './TagArgs.schema'

const makeSchema = () => z.object({
  rating: z.union([z.boolean(), z.lazy(() => RatingArgsObjectSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional()
}).strict();
export const RatingTagIncludeObjectSchema: z.ZodType<Prisma.RatingTagInclude> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagInclude>;
export const RatingTagIncludeObjectZodSchema = makeSchema();
