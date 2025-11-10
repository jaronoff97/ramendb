import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishUpdateOneRequiredWithoutTagsNestedInputObjectSchema as DishUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './DishUpdateOneRequiredWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  dish: z.lazy(() => DishUpdateOneRequiredWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const DishTagUpdateWithoutTagInputObjectSchema: z.ZodType<Prisma.DishTagUpdateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpdateWithoutTagInput>;
export const DishTagUpdateWithoutTagInputObjectZodSchema = makeSchema();
