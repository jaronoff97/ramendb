import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './DishTagWhereUniqueInput.schema';
import { DishTagUpdateWithoutTagInputObjectSchema as DishTagUpdateWithoutTagInputObjectSchema } from './DishTagUpdateWithoutTagInput.schema';
import { DishTagUncheckedUpdateWithoutTagInputObjectSchema as DishTagUncheckedUpdateWithoutTagInputObjectSchema } from './DishTagUncheckedUpdateWithoutTagInput.schema';
import { DishTagCreateWithoutTagInputObjectSchema as DishTagCreateWithoutTagInputObjectSchema } from './DishTagCreateWithoutTagInput.schema';
import { DishTagUncheckedCreateWithoutTagInputObjectSchema as DishTagUncheckedCreateWithoutTagInputObjectSchema } from './DishTagUncheckedCreateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishTagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DishTagUpdateWithoutTagInputObjectSchema), z.lazy(() => DishTagUncheckedUpdateWithoutTagInputObjectSchema)]),
  create: z.union([z.lazy(() => DishTagCreateWithoutTagInputObjectSchema), z.lazy(() => DishTagUncheckedCreateWithoutTagInputObjectSchema)])
}).strict();
export const DishTagUpsertWithWhereUniqueWithoutTagInputObjectSchema: z.ZodType<Prisma.DishTagUpsertWithWhereUniqueWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpsertWithWhereUniqueWithoutTagInput>;
export const DishTagUpsertWithWhereUniqueWithoutTagInputObjectZodSchema = makeSchema();
