import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewUpdateOneRequiredWithoutTagsNestedInputObjectSchema as ReviewUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './ReviewUpdateOneRequiredWithoutTagsNestedInput.schema';
import { TagUpdateOneRequiredWithoutReviewsNestedInputObjectSchema as TagUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutReviewsNestedInput.schema'

const makeSchema = () => z.object({
  review: z.lazy(() => ReviewUpdateOneRequiredWithoutTagsNestedInputObjectSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutReviewsNestedInputObjectSchema).optional()
}).strict();
export const ReviewTagUpdateInputObjectSchema: z.ZodType<Prisma.ReviewTagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpdateInput>;
export const ReviewTagUpdateInputObjectZodSchema = makeSchema();
