import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './DishTagWhereUniqueInput.schema';
import { DishTagCreateWithoutTagInputObjectSchema as DishTagCreateWithoutTagInputObjectSchema } from './DishTagCreateWithoutTagInput.schema';
import { DishTagUncheckedCreateWithoutTagInputObjectSchema as DishTagUncheckedCreateWithoutTagInputObjectSchema } from './DishTagUncheckedCreateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishTagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DishTagCreateWithoutTagInputObjectSchema), z.lazy(() => DishTagUncheckedCreateWithoutTagInputObjectSchema)])
}).strict();
export const DishTagCreateOrConnectWithoutTagInputObjectSchema: z.ZodType<Prisma.DishTagCreateOrConnectWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateOrConnectWithoutTagInput>;
export const DishTagCreateOrConnectWithoutTagInputObjectZodSchema = makeSchema();
