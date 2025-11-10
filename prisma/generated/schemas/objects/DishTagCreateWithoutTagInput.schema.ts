import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishCreateNestedOneWithoutTagsInputObjectSchema as DishCreateNestedOneWithoutTagsInputObjectSchema } from './DishCreateNestedOneWithoutTagsInput.schema'

const makeSchema = () => z.object({
  dish: z.lazy(() => DishCreateNestedOneWithoutTagsInputObjectSchema)
}).strict();
export const DishTagCreateWithoutTagInputObjectSchema: z.ZodType<Prisma.DishTagCreateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateWithoutTagInput>;
export const DishTagCreateWithoutTagInputObjectZodSchema = makeSchema();
