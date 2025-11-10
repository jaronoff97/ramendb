import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './DishTagWhereUniqueInput.schema';
import { DishTagUpdateWithoutDishInputObjectSchema as DishTagUpdateWithoutDishInputObjectSchema } from './DishTagUpdateWithoutDishInput.schema';
import { DishTagUncheckedUpdateWithoutDishInputObjectSchema as DishTagUncheckedUpdateWithoutDishInputObjectSchema } from './DishTagUncheckedUpdateWithoutDishInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishTagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DishTagUpdateWithoutDishInputObjectSchema), z.lazy(() => DishTagUncheckedUpdateWithoutDishInputObjectSchema)])
}).strict();
export const DishTagUpdateWithWhereUniqueWithoutDishInputObjectSchema: z.ZodType<Prisma.DishTagUpdateWithWhereUniqueWithoutDishInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpdateWithWhereUniqueWithoutDishInput>;
export const DishTagUpdateWithWhereUniqueWithoutDishInputObjectZodSchema = makeSchema();
