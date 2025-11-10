import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewArgsObjectSchema as ReviewArgsObjectSchema } from './ReviewArgs.schema';
import { TagArgsObjectSchema as TagArgsObjectSchema } from './TagArgs.schema'

const makeSchema = () => z.object({
  review: z.union([z.boolean(), z.lazy(() => ReviewArgsObjectSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional()
}).strict();
export const ReviewTagIncludeObjectSchema: z.ZodType<Prisma.ReviewTagInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagInclude>;
export const ReviewTagIncludeObjectZodSchema = makeSchema();
