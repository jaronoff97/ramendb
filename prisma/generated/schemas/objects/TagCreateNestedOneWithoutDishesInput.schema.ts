import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateWithoutDishesInputObjectSchema as TagCreateWithoutDishesInputObjectSchema } from './TagCreateWithoutDishesInput.schema';
import { TagUncheckedCreateWithoutDishesInputObjectSchema as TagUncheckedCreateWithoutDishesInputObjectSchema } from './TagUncheckedCreateWithoutDishesInput.schema';
import { TagCreateOrConnectWithoutDishesInputObjectSchema as TagCreateOrConnectWithoutDishesInputObjectSchema } from './TagCreateOrConnectWithoutDishesInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutDishesInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutDishesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutDishesInputObjectSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional()
}).strict();
export const TagCreateNestedOneWithoutDishesInputObjectSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutDishesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateNestedOneWithoutDishesInput>;
export const TagCreateNestedOneWithoutDishesInputObjectZodSchema = makeSchema();
