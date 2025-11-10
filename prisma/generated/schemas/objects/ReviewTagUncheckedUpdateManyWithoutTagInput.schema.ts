import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  reviewId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ReviewTagUncheckedUpdateManyWithoutTagInputObjectSchema: z.ZodType<Prisma.ReviewTagUncheckedUpdateManyWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUncheckedUpdateManyWithoutTagInput>;
export const ReviewTagUncheckedUpdateManyWithoutTagInputObjectZodSchema = makeSchema();
