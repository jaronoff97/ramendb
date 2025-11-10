import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LocationUpdateOneRequiredWithoutReviewsNestedInputObjectSchema as LocationUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutReviewsNestedInput.schema';
import { UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema as UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutReviewsNestedInput.schema';
import { RatingUpdateOneWithoutReviewsNestedInputObjectSchema as RatingUpdateOneWithoutReviewsNestedInputObjectSchema } from './RatingUpdateOneWithoutReviewsNestedInput.schema';
import { ReviewPictureUpdateManyWithoutReviewNestedInputObjectSchema as ReviewPictureUpdateManyWithoutReviewNestedInputObjectSchema } from './ReviewPictureUpdateManyWithoutReviewNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  text: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.lazy(() => LocationUpdateOneRequiredWithoutReviewsNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema).optional(),
  rating: z.lazy(() => RatingUpdateOneWithoutReviewsNestedInputObjectSchema).optional(),
  pictures: z.lazy(() => ReviewPictureUpdateManyWithoutReviewNestedInputObjectSchema).optional()
}).strict();
export const ReviewUpdateWithoutTagsInputObjectSchema: z.ZodType<Prisma.ReviewUpdateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateWithoutTagsInput>;
export const ReviewUpdateWithoutTagsInputObjectZodSchema = makeSchema();
