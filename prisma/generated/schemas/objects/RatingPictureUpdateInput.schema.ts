import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RatingUpdateOneRequiredWithoutRatingPicturesNestedInputObjectSchema as RatingUpdateOneRequiredWithoutRatingPicturesNestedInputObjectSchema } from './RatingUpdateOneRequiredWithoutRatingPicturesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  caption: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  rating: z.lazy(() => RatingUpdateOneRequiredWithoutRatingPicturesNestedInputObjectSchema).optional()
}).strict();
export const RatingPictureUpdateInputObjectSchema: z.ZodType<Prisma.RatingPictureUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureUpdateInput>;
export const RatingPictureUpdateInputObjectZodSchema = makeSchema();
