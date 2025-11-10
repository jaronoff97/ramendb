import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dishId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const DishTagUncheckedUpdateManyWithoutTagInputObjectSchema: z.ZodType<Prisma.DishTagUncheckedUpdateManyWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUncheckedUpdateManyWithoutTagInput>;
export const DishTagUncheckedUpdateManyWithoutTagInputObjectZodSchema = makeSchema();
