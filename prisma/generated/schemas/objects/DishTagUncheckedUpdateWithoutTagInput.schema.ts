import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dishId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const DishTagUncheckedUpdateWithoutTagInputObjectSchema: z.ZodType<Prisma.DishTagUncheckedUpdateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUncheckedUpdateWithoutTagInput>;
export const DishTagUncheckedUpdateWithoutTagInputObjectZodSchema = makeSchema();
