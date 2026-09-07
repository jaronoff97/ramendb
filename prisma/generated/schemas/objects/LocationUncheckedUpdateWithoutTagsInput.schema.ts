import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DishUncheckedUpdateManyWithoutLocationNestedInputObjectSchema as DishUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from './DishUncheckedUpdateManyWithoutLocationNestedInput.schema';
import { RatingUncheckedUpdateManyWithoutLocationNestedInputObjectSchema as RatingUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from './RatingUncheckedUpdateManyWithoutLocationNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutLocationNestedInputObjectSchema as ReviewUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutLocationNestedInput.schema';
import { LocationPictureUncheckedUpdateManyWithoutLocationNestedInputObjectSchema as LocationPictureUncheckedUpdateManyWithoutLocationNestedInputObjectSchema } from './LocationPictureUncheckedUpdateManyWithoutLocationNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  osmId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  address: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  country: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  latitude: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  longitude: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  website: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  hours: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  dishes: z.lazy(() => DishUncheckedUpdateManyWithoutLocationNestedInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingUncheckedUpdateManyWithoutLocationNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutLocationNestedInputObjectSchema).optional(),
  pictures: z.lazy(() => LocationPictureUncheckedUpdateManyWithoutLocationNestedInputObjectSchema).optional()
}).strict();
export const LocationUncheckedUpdateWithoutTagsInputObjectSchema: z.ZodType<Prisma.LocationUncheckedUpdateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUncheckedUpdateWithoutTagsInput>;
export const LocationUncheckedUpdateWithoutTagsInputObjectZodSchema = makeSchema();
