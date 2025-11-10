import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewUpdateOneRequiredWithoutTagsNestedInputObjectSchema as ReviewUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './ReviewUpdateOneRequiredWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  review: z.lazy(() => ReviewUpdateOneRequiredWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const ReviewTagUpdateWithoutTagInputObjectSchema: z.ZodType<Prisma.ReviewTagUpdateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpdateWithoutTagInput>;
export const ReviewTagUpdateWithoutTagInputObjectZodSchema = makeSchema();
