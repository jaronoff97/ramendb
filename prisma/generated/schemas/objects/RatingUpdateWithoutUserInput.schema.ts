import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LocationUpdateOneRequiredWithoutRatingsNestedInputObjectSchema as LocationUpdateOneRequiredWithoutRatingsNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutRatingsNestedInput.schema';
import { ReviewUpdateManyWithoutRatingNestedInputObjectSchema as ReviewUpdateManyWithoutRatingNestedInputObjectSchema } from './ReviewUpdateManyWithoutRatingNestedInput.schema';
import { RatingTagUpdateManyWithoutRatingNestedInputObjectSchema as RatingTagUpdateManyWithoutRatingNestedInputObjectSchema } from './RatingTagUpdateManyWithoutRatingNestedInput.schema';
import { RatingPictureUpdateManyWithoutRatingNestedInputObjectSchema as RatingPictureUpdateManyWithoutRatingNestedInputObjectSchema } from './RatingPictureUpdateManyWithoutRatingNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.lazy(() => LocationUpdateOneRequiredWithoutRatingsNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutRatingNestedInputObjectSchema).optional(),
  tags: z.lazy(() => RatingTagUpdateManyWithoutRatingNestedInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureUpdateManyWithoutRatingNestedInputObjectSchema).optional()
}).strict();
export const RatingUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.RatingUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateWithoutUserInput>;
export const RatingUpdateWithoutUserInputObjectZodSchema = makeSchema();
