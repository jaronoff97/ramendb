import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReviewUncheckedUpdateManyWithoutRatingNestedInputObjectSchema as ReviewUncheckedUpdateManyWithoutRatingNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutRatingNestedInput.schema';
import { RatingTagUncheckedUpdateManyWithoutRatingNestedInputObjectSchema as RatingTagUncheckedUpdateManyWithoutRatingNestedInputObjectSchema } from './RatingTagUncheckedUpdateManyWithoutRatingNestedInput.schema';
import { RatingPictureUncheckedUpdateManyWithoutRatingNestedInputObjectSchema as RatingPictureUncheckedUpdateManyWithoutRatingNestedInputObjectSchema } from './RatingPictureUncheckedUpdateManyWithoutRatingNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  locationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutRatingNestedInputObjectSchema).optional(),
  tags: z.lazy(() => RatingTagUncheckedUpdateManyWithoutRatingNestedInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureUncheckedUpdateManyWithoutRatingNestedInputObjectSchema).optional()
}).strict();
export const RatingUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.RatingUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUncheckedUpdateInput>;
export const RatingUncheckedUpdateInputObjectZodSchema = makeSchema();
