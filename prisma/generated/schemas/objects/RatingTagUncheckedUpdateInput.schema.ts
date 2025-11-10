import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ratingId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tagId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RatingTagUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.RatingTagUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUncheckedUpdateInput>;
export const RatingTagUncheckedUpdateInputObjectZodSchema = makeSchema();
