import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutDishesInputObjectSchema as TagCreateWithoutDishesInputObjectSchema } from './TagCreateWithoutDishesInput.schema';
import { TagUncheckedCreateWithoutDishesInputObjectSchema as TagUncheckedCreateWithoutDishesInputObjectSchema } from './TagUncheckedCreateWithoutDishesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagCreateWithoutDishesInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutDishesInputObjectSchema)])
}).strict();
export const TagCreateOrConnectWithoutDishesInputObjectSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutDishesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateOrConnectWithoutDishesInput>;
export const TagCreateOrConnectWithoutDishesInputObjectZodSchema = makeSchema();
