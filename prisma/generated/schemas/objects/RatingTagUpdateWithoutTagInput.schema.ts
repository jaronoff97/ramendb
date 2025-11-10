import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingUpdateOneRequiredWithoutTagsNestedInputObjectSchema as RatingUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './RatingUpdateOneRequiredWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  rating: z.lazy(() => RatingUpdateOneRequiredWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const RatingTagUpdateWithoutTagInputObjectSchema: z.ZodType<Prisma.RatingTagUpdateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUpdateWithoutTagInput>;
export const RatingTagUpdateWithoutTagInputObjectZodSchema = makeSchema();
