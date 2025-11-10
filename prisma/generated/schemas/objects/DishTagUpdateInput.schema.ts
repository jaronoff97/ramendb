import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishUpdateOneRequiredWithoutTagsNestedInputObjectSchema as DishUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './DishUpdateOneRequiredWithoutTagsNestedInput.schema';
import { TagUpdateOneRequiredWithoutDishesNestedInputObjectSchema as TagUpdateOneRequiredWithoutDishesNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutDishesNestedInput.schema'

const makeSchema = () => z.object({
  dish: z.lazy(() => DishUpdateOneRequiredWithoutTagsNestedInputObjectSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutDishesNestedInputObjectSchema).optional()
}).strict();
export const DishTagUpdateInputObjectSchema: z.ZodType<Prisma.DishTagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpdateInput>;
export const DishTagUpdateInputObjectZodSchema = makeSchema();
