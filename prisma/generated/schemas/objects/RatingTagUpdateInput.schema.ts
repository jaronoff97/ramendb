import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingUpdateOneRequiredWithoutTagsNestedInputObjectSchema as RatingUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './RatingUpdateOneRequiredWithoutTagsNestedInput.schema';
import { TagUpdateOneRequiredWithoutRatingsNestedInputObjectSchema as TagUpdateOneRequiredWithoutRatingsNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutRatingsNestedInput.schema'

const makeSchema = () => z.object({
  rating: z.lazy(() => RatingUpdateOneRequiredWithoutTagsNestedInputObjectSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutRatingsNestedInputObjectSchema).optional()
}).strict();
export const RatingTagUpdateInputObjectSchema: z.ZodType<Prisma.RatingTagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUpdateInput>;
export const RatingTagUpdateInputObjectZodSchema = makeSchema();
