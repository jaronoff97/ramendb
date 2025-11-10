import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingArgsObjectSchema as RatingArgsObjectSchema } from './RatingArgs.schema';
import { TagArgsObjectSchema as TagArgsObjectSchema } from './TagArgs.schema'

const makeSchema = () => z.object({
  ratingId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  rating: z.union([z.boolean(), z.lazy(() => RatingArgsObjectSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional()
}).strict();
export const RatingTagSelectObjectSchema: z.ZodType<Prisma.RatingTagSelect> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagSelect>;
export const RatingTagSelectObjectZodSchema = makeSchema();
