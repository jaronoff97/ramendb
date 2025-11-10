import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './DishTagWhereUniqueInput.schema';
import { DishTagCreateWithoutDishInputObjectSchema as DishTagCreateWithoutDishInputObjectSchema } from './DishTagCreateWithoutDishInput.schema';
import { DishTagUncheckedCreateWithoutDishInputObjectSchema as DishTagUncheckedCreateWithoutDishInputObjectSchema } from './DishTagUncheckedCreateWithoutDishInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishTagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DishTagCreateWithoutDishInputObjectSchema), z.lazy(() => DishTagUncheckedCreateWithoutDishInputObjectSchema)])
}).strict();
export const DishTagCreateOrConnectWithoutDishInputObjectSchema: z.ZodType<Prisma.DishTagCreateOrConnectWithoutDishInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateOrConnectWithoutDishInput>;
export const DishTagCreateOrConnectWithoutDishInputObjectZodSchema = makeSchema();
