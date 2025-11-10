import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LocationUpdateOneRequiredWithoutRatingsNestedInputObjectSchema as LocationUpdateOneRequiredWithoutRatingsNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutRatingsNestedInput.schema';
import { UserUpdateOneRequiredWithoutRatingsNestedInputObjectSchema as UserUpdateOneRequiredWithoutRatingsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRatingsNestedInput.schema';
import { ReviewUpdateManyWithoutRatingNestedInputObjectSchema as ReviewUpdateManyWithoutRatingNestedInputObjectSchema } from './ReviewUpdateManyWithoutRatingNestedInput.schema';
import { RatingPictureUpdateManyWithoutRatingNestedInputObjectSchema as RatingPictureUpdateManyWithoutRatingNestedInputObjectSchema } from './RatingPictureUpdateManyWithoutRatingNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.lazy(() => LocationUpdateOneRequiredWithoutRatingsNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRatingsNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutRatingNestedInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureUpdateManyWithoutRatingNestedInputObjectSchema).optional()
}).strict();
export const RatingUpdateWithoutTagsInputObjectSchema: z.ZodType<Prisma.RatingUpdateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateWithoutTagsInput>;
export const RatingUpdateWithoutTagsInputObjectZodSchema = makeSchema();
