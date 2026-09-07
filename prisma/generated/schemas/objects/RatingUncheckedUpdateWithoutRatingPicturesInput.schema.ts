import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReviewUncheckedUpdateManyWithoutRatingNestedInputObjectSchema as ReviewUncheckedUpdateManyWithoutRatingNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutRatingNestedInput.schema';
import { RatingTagUncheckedUpdateManyWithoutRatingNestedInputObjectSchema as RatingTagUncheckedUpdateManyWithoutRatingNestedInputObjectSchema } from './RatingTagUncheckedUpdateManyWithoutRatingNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  locationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutRatingNestedInputObjectSchema).optional(),
  tags: z.lazy(() => RatingTagUncheckedUpdateManyWithoutRatingNestedInputObjectSchema).optional()
}).strict();
export const RatingUncheckedUpdateWithoutRatingPicturesInputObjectSchema: z.ZodType<Prisma.RatingUncheckedUpdateWithoutRatingPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUncheckedUpdateWithoutRatingPicturesInput>;
export const RatingUncheckedUpdateWithoutRatingPicturesInputObjectZodSchema = makeSchema();
