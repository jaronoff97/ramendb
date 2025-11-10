import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  tagId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RatingTagUncheckedUpdateWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingTagUncheckedUpdateWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUncheckedUpdateWithoutRatingInput>;
export const RatingTagUncheckedUpdateWithoutRatingInputObjectZodSchema = makeSchema();
