import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  tagId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ReviewTagUncheckedUpdateManyWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewTagUncheckedUpdateManyWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUncheckedUpdateManyWithoutReviewInput>;
export const ReviewTagUncheckedUpdateManyWithoutReviewInputObjectZodSchema = makeSchema();
