import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RatingUpdateManyWithoutUserNestedInputObjectSchema as RatingUpdateManyWithoutUserNestedInputObjectSchema } from './RatingUpdateManyWithoutUserNestedInput.schema';
import { ReviewUpdateManyWithoutUserNestedInputObjectSchema as ReviewUpdateManyWithoutUserNestedInputObjectSchema } from './ReviewUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  workosId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pictureUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ratings: z.lazy(() => RatingUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateInputObjectSchema: z.ZodType<Prisma.UserUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateInput>;
export const UserUpdateInputObjectZodSchema = makeSchema();
