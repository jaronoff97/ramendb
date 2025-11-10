import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagUpdateOneRequiredWithoutDishesNestedInputObjectSchema as TagUpdateOneRequiredWithoutDishesNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutDishesNestedInput.schema'

const makeSchema = () => z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutDishesNestedInputObjectSchema).optional()
}).strict();
export const DishTagUpdateWithoutDishInputObjectSchema: z.ZodType<Prisma.DishTagUpdateWithoutDishInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpdateWithoutDishInput>;
export const DishTagUpdateWithoutDishInputObjectZodSchema = makeSchema();
