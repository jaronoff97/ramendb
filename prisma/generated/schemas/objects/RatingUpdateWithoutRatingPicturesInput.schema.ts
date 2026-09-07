import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LocationUpdateOneRequiredWithoutRatingsNestedInputObjectSchema as LocationUpdateOneRequiredWithoutRatingsNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutRatingsNestedInput.schema';
import { UserUpdateOneRequiredWithoutRatingsNestedInputObjectSchema as UserUpdateOneRequiredWithoutRatingsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRatingsNestedInput.schema';
import { ReviewUpdateManyWithoutRatingNestedInputObjectSchema as ReviewUpdateManyWithoutRatingNestedInputObjectSchema } from './ReviewUpdateManyWithoutRatingNestedInput.schema';
import { RatingTagUpdateManyWithoutRatingNestedInputObjectSchema as RatingTagUpdateManyWithoutRatingNestedInputObjectSchema } from './RatingTagUpdateManyWithoutRatingNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.lazy(() => LocationUpdateOneRequiredWithoutRatingsNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRatingsNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutRatingNestedInputObjectSchema).optional(),
  tags: z.lazy(() => RatingTagUpdateManyWithoutRatingNestedInputObjectSchema).optional()
}).strict();
export const RatingUpdateWithoutRatingPicturesInputObjectSchema: z.ZodType<Prisma.RatingUpdateWithoutRatingPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateWithoutRatingPicturesInput>;
export const RatingUpdateWithoutRatingPicturesInputObjectZodSchema = makeSchema();
