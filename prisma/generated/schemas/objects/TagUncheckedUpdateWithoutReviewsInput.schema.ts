import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LocationTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema as LocationTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './LocationTagUncheckedUpdateManyWithoutTagNestedInput.schema';
import { DishTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema as DishTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './DishTagUncheckedUpdateManyWithoutTagNestedInput.schema';
import { RatingTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema as RatingTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './RatingTagUncheckedUpdateManyWithoutTagNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  locations: z.lazy(() => LocationTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema).optional(),
  dishes: z.lazy(() => DishTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema).optional()
}).strict();
export const TagUncheckedUpdateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedUpdateWithoutReviewsInput>;
export const TagUncheckedUpdateWithoutReviewsInputObjectZodSchema = makeSchema();
