import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './DishWhereUniqueInput.schema';
import { DishUpdateWithoutLocationInputObjectSchema as DishUpdateWithoutLocationInputObjectSchema } from './DishUpdateWithoutLocationInput.schema';
import { DishUncheckedUpdateWithoutLocationInputObjectSchema as DishUncheckedUpdateWithoutLocationInputObjectSchema } from './DishUncheckedUpdateWithoutLocationInput.schema';
import { DishCreateWithoutLocationInputObjectSchema as DishCreateWithoutLocationInputObjectSchema } from './DishCreateWithoutLocationInput.schema';
import { DishUncheckedCreateWithoutLocationInputObjectSchema as DishUncheckedCreateWithoutLocationInputObjectSchema } from './DishUncheckedCreateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DishUpdateWithoutLocationInputObjectSchema), z.lazy(() => DishUncheckedUpdateWithoutLocationInputObjectSchema)]),
  create: z.union([z.lazy(() => DishCreateWithoutLocationInputObjectSchema), z.lazy(() => DishUncheckedCreateWithoutLocationInputObjectSchema)])
}).strict();
export const DishUpsertWithWhereUniqueWithoutLocationInputObjectSchema: z.ZodType<Prisma.DishUpsertWithWhereUniqueWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishUpsertWithWhereUniqueWithoutLocationInput>;
export const DishUpsertWithWhereUniqueWithoutLocationInputObjectZodSchema = makeSchema();
