import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagUpdateWithoutDishesInputObjectSchema as TagUpdateWithoutDishesInputObjectSchema } from './TagUpdateWithoutDishesInput.schema';
import { TagUncheckedUpdateWithoutDishesInputObjectSchema as TagUncheckedUpdateWithoutDishesInputObjectSchema } from './TagUncheckedUpdateWithoutDishesInput.schema';
import { TagCreateWithoutDishesInputObjectSchema as TagCreateWithoutDishesInputObjectSchema } from './TagCreateWithoutDishesInput.schema';
import { TagUncheckedCreateWithoutDishesInputObjectSchema as TagUncheckedCreateWithoutDishesInputObjectSchema } from './TagUncheckedCreateWithoutDishesInput.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TagUpdateWithoutDishesInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutDishesInputObjectSchema)]),
  create: z.union([z.lazy(() => TagCreateWithoutDishesInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutDishesInputObjectSchema)]),
  where: z.lazy(() => TagWhereInputObjectSchema).optional()
}).strict();
export const TagUpsertWithoutDishesInputObjectSchema: z.ZodType<Prisma.TagUpsertWithoutDishesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpsertWithoutDishesInput>;
export const TagUpsertWithoutDishesInputObjectZodSchema = makeSchema();
