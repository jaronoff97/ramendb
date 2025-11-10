import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './DishTagWhereUniqueInput.schema';
import { DishTagUpdateWithoutTagInputObjectSchema as DishTagUpdateWithoutTagInputObjectSchema } from './DishTagUpdateWithoutTagInput.schema';
import { DishTagUncheckedUpdateWithoutTagInputObjectSchema as DishTagUncheckedUpdateWithoutTagInputObjectSchema } from './DishTagUncheckedUpdateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishTagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DishTagUpdateWithoutTagInputObjectSchema), z.lazy(() => DishTagUncheckedUpdateWithoutTagInputObjectSchema)])
}).strict();
export const DishTagUpdateWithWhereUniqueWithoutTagInputObjectSchema: z.ZodType<Prisma.DishTagUpdateWithWhereUniqueWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpdateWithWhereUniqueWithoutTagInput>;
export const DishTagUpdateWithWhereUniqueWithoutTagInputObjectZodSchema = makeSchema();
