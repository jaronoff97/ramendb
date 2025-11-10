import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LocationTagUpdateManyWithoutTagNestedInputObjectSchema as LocationTagUpdateManyWithoutTagNestedInputObjectSchema } from './LocationTagUpdateManyWithoutTagNestedInput.schema';
import { DishTagUpdateManyWithoutTagNestedInputObjectSchema as DishTagUpdateManyWithoutTagNestedInputObjectSchema } from './DishTagUpdateManyWithoutTagNestedInput.schema';
import { RatingTagUpdateManyWithoutTagNestedInputObjectSchema as RatingTagUpdateManyWithoutTagNestedInputObjectSchema } from './RatingTagUpdateManyWithoutTagNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  locations: z.lazy(() => LocationTagUpdateManyWithoutTagNestedInputObjectSchema).optional(),
  dishes: z.lazy(() => DishTagUpdateManyWithoutTagNestedInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingTagUpdateManyWithoutTagNestedInputObjectSchema).optional()
}).strict();
export const TagUpdateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.TagUpdateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateWithoutReviewsInput>;
export const TagUpdateWithoutReviewsInputObjectZodSchema = makeSchema();
