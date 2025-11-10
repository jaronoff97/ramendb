import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  reviewId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tagId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ReviewTagUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ReviewTagUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUncheckedUpdateInput>;
export const ReviewTagUncheckedUpdateInputObjectZodSchema = makeSchema();
