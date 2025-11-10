import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishCreateNestedOneWithoutTagsInputObjectSchema as DishCreateNestedOneWithoutTagsInputObjectSchema } from './DishCreateNestedOneWithoutTagsInput.schema';
import { TagCreateNestedOneWithoutDishesInputObjectSchema as TagCreateNestedOneWithoutDishesInputObjectSchema } from './TagCreateNestedOneWithoutDishesInput.schema'

const makeSchema = () => z.object({
  dish: z.lazy(() => DishCreateNestedOneWithoutTagsInputObjectSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutDishesInputObjectSchema)
}).strict();
export const DishTagCreateInputObjectSchema: z.ZodType<Prisma.DishTagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateInput>;
export const DishTagCreateInputObjectZodSchema = makeSchema();
