import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewArgsObjectSchema as ReviewArgsObjectSchema } from './ReviewArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  reviewId: z.boolean().optional(),
  url: z.boolean().optional(),
  caption: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  review: z.union([z.boolean(), z.lazy(() => ReviewArgsObjectSchema)]).optional()
}).strict();
export const ReviewPictureSelectObjectSchema: z.ZodType<Prisma.ReviewPictureSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureSelect>;
export const ReviewPictureSelectObjectZodSchema = makeSchema();
