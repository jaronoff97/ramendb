import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReviewPictureUncheckedUpdateManyWithoutReviewNestedInputObjectSchema as ReviewPictureUncheckedUpdateManyWithoutReviewNestedInputObjectSchema } from './ReviewPictureUncheckedUpdateManyWithoutReviewNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  locationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ratingId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  text: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  pictures: z.lazy(() => ReviewPictureUncheckedUpdateManyWithoutReviewNestedInputObjectSchema).optional()
}).strict();
export const ReviewUncheckedUpdateWithoutTagsInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedUpdateWithoutTagsInput>;
export const ReviewUncheckedUpdateWithoutTagsInputObjectZodSchema = makeSchema();
