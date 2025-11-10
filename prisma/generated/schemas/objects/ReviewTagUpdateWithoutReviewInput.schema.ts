import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagUpdateOneRequiredWithoutReviewsNestedInputObjectSchema as TagUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutReviewsNestedInput.schema'

const makeSchema = () => z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutReviewsNestedInputObjectSchema).optional()
}).strict();
export const ReviewTagUpdateWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewTagUpdateWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpdateWithoutReviewInput>;
export const ReviewTagUpdateWithoutReviewInputObjectZodSchema = makeSchema();
