import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  reviewId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ReviewTagUncheckedUpdateWithoutTagInputObjectSchema: z.ZodType<Prisma.ReviewTagUncheckedUpdateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUncheckedUpdateWithoutTagInput>;
export const ReviewTagUncheckedUpdateWithoutTagInputObjectZodSchema = makeSchema();
