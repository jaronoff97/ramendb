import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateWithoutDishesInputObjectSchema as TagCreateWithoutDishesInputObjectSchema } from './TagCreateWithoutDishesInput.schema';
import { TagUncheckedCreateWithoutDishesInputObjectSchema as TagUncheckedCreateWithoutDishesInputObjectSchema } from './TagUncheckedCreateWithoutDishesInput.schema';
import { TagCreateOrConnectWithoutDishesInputObjectSchema as TagCreateOrConnectWithoutDishesInputObjectSchema } from './TagCreateOrConnectWithoutDishesInput.schema';
import { TagUpsertWithoutDishesInputObjectSchema as TagUpsertWithoutDishesInputObjectSchema } from './TagUpsertWithoutDishesInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateToOneWithWhereWithoutDishesInputObjectSchema as TagUpdateToOneWithWhereWithoutDishesInputObjectSchema } from './TagUpdateToOneWithWhereWithoutDishesInput.schema';
import { TagUpdateWithoutDishesInputObjectSchema as TagUpdateWithoutDishesInputObjectSchema } from './TagUpdateWithoutDishesInput.schema';
import { TagUncheckedUpdateWithoutDishesInputObjectSchema as TagUncheckedUpdateWithoutDishesInputObjectSchema } from './TagUncheckedUpdateWithoutDishesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutDishesInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutDishesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutDishesInputObjectSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutDishesInputObjectSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TagUpdateToOneWithWhereWithoutDishesInputObjectSchema), z.lazy(() => TagUpdateWithoutDishesInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutDishesInputObjectSchema)]).optional()
}).strict();
export const TagUpdateOneRequiredWithoutDishesNestedInputObjectSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutDishesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateOneRequiredWithoutDishesNestedInput>;
export const TagUpdateOneRequiredWithoutDishesNestedInputObjectZodSchema = makeSchema();
