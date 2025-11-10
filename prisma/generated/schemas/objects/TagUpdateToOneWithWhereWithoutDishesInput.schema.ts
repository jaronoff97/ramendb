import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema';
import { TagUpdateWithoutDishesInputObjectSchema as TagUpdateWithoutDishesInputObjectSchema } from './TagUpdateWithoutDishesInput.schema';
import { TagUncheckedUpdateWithoutDishesInputObjectSchema as TagUncheckedUpdateWithoutDishesInputObjectSchema } from './TagUncheckedUpdateWithoutDishesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TagUpdateWithoutDishesInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutDishesInputObjectSchema)])
}).strict();
export const TagUpdateToOneWithWhereWithoutDishesInputObjectSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutDishesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutDishesInput>;
export const TagUpdateToOneWithWhereWithoutDishesInputObjectZodSchema = makeSchema();
