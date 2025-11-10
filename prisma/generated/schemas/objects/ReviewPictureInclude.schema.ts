import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewArgsObjectSchema as ReviewArgsObjectSchema } from './ReviewArgs.schema'

const makeSchema = () => z.object({
  review: z.union([z.boolean(), z.lazy(() => ReviewArgsObjectSchema)]).optional()
}).strict();
export const ReviewPictureIncludeObjectSchema: z.ZodType<Prisma.ReviewPictureInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureInclude>;
export const ReviewPictureIncludeObjectZodSchema = makeSchema();
