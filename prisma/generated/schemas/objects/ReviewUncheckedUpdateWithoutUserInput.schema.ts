import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReviewPictureUncheckedUpdateManyWithoutReviewNestedInputObjectSchema as ReviewPictureUncheckedUpdateManyWithoutReviewNestedInputObjectSchema } from './ReviewPictureUncheckedUpdateManyWithoutReviewNestedInput.schema';
import { ReviewTagUncheckedUpdateManyWithoutReviewNestedInputObjectSchema as ReviewTagUncheckedUpdateManyWithoutReviewNestedInputObjectSchema } from './ReviewTagUncheckedUpdateManyWithoutReviewNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  locationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ratingId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  text: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  pictures: z.lazy(() => ReviewPictureUncheckedUpdateManyWithoutReviewNestedInputObjectSchema).optional(),
  tags: z.lazy(() => ReviewTagUncheckedUpdateManyWithoutReviewNestedInputObjectSchema).optional()
}).strict();
export const ReviewUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedUpdateWithoutUserInput>;
export const ReviewUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
