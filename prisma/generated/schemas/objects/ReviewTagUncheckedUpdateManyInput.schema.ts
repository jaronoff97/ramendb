import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  reviewId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tagId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ReviewTagUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.ReviewTagUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUncheckedUpdateManyInput>;
export const ReviewTagUncheckedUpdateManyInputObjectZodSchema = makeSchema();
