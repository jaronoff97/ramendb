import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ratingId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tagId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RatingTagUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.RatingTagUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUncheckedUpdateManyInput>;
export const RatingTagUncheckedUpdateManyInputObjectZodSchema = makeSchema();
