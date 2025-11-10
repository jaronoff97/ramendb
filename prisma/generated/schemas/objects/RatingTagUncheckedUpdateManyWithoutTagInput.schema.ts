import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ratingId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RatingTagUncheckedUpdateManyWithoutTagInputObjectSchema: z.ZodType<Prisma.RatingTagUncheckedUpdateManyWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUncheckedUpdateManyWithoutTagInput>;
export const RatingTagUncheckedUpdateManyWithoutTagInputObjectZodSchema = makeSchema();
