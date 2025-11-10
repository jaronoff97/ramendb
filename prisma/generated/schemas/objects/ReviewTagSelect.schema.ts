import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewArgsObjectSchema as ReviewArgsObjectSchema } from './ReviewArgs.schema';
import { TagArgsObjectSchema as TagArgsObjectSchema } from './TagArgs.schema'

const makeSchema = () => z.object({
  reviewId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  review: z.union([z.boolean(), z.lazy(() => ReviewArgsObjectSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional()
}).strict();
export const ReviewTagSelectObjectSchema: z.ZodType<Prisma.ReviewTagSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagSelect>;
export const ReviewTagSelectObjectZodSchema = makeSchema();
