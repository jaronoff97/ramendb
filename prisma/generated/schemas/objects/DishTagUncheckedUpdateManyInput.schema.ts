import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dishId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tagId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const DishTagUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.DishTagUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUncheckedUpdateManyInput>;
export const DishTagUncheckedUpdateManyInputObjectZodSchema = makeSchema();
