import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './DishTagWhereUniqueInput.schema';
import { DishTagUpdateWithoutDishInputObjectSchema as DishTagUpdateWithoutDishInputObjectSchema } from './DishTagUpdateWithoutDishInput.schema';
import { DishTagUncheckedUpdateWithoutDishInputObjectSchema as DishTagUncheckedUpdateWithoutDishInputObjectSchema } from './DishTagUncheckedUpdateWithoutDishInput.schema';
import { DishTagCreateWithoutDishInputObjectSchema as DishTagCreateWithoutDishInputObjectSchema } from './DishTagCreateWithoutDishInput.schema';
import { DishTagUncheckedCreateWithoutDishInputObjectSchema as DishTagUncheckedCreateWithoutDishInputObjectSchema } from './DishTagUncheckedCreateWithoutDishInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishTagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DishTagUpdateWithoutDishInputObjectSchema), z.lazy(() => DishTagUncheckedUpdateWithoutDishInputObjectSchema)]),
  create: z.union([z.lazy(() => DishTagCreateWithoutDishInputObjectSchema), z.lazy(() => DishTagUncheckedCreateWithoutDishInputObjectSchema)])
}).strict();
export const DishTagUpsertWithWhereUniqueWithoutDishInputObjectSchema: z.ZodType<Prisma.DishTagUpsertWithWhereUniqueWithoutDishInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpsertWithWhereUniqueWithoutDishInput>;
export const DishTagUpsertWithWhereUniqueWithoutDishInputObjectZodSchema = makeSchema();
