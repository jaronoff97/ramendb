import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagUpdateOneRequiredWithoutRatingsNestedInputObjectSchema as TagUpdateOneRequiredWithoutRatingsNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutRatingsNestedInput.schema'

const makeSchema = () => z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutRatingsNestedInputObjectSchema).optional()
}).strict();
export const RatingTagUpdateWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingTagUpdateWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUpdateWithoutRatingInput>;
export const RatingTagUpdateWithoutRatingInputObjectZodSchema = makeSchema();
