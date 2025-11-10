import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateNestedOneWithoutDishesInputObjectSchema as TagCreateNestedOneWithoutDishesInputObjectSchema } from './TagCreateNestedOneWithoutDishesInput.schema'

const makeSchema = () => z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutDishesInputObjectSchema)
}).strict();
export const DishTagCreateWithoutDishInputObjectSchema: z.ZodType<Prisma.DishTagCreateWithoutDishInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateWithoutDishInput>;
export const DishTagCreateWithoutDishInputObjectZodSchema = makeSchema();
