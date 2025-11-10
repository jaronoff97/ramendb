import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './DishWhereUniqueInput.schema';
import { DishUpdateWithoutLocationInputObjectSchema as DishUpdateWithoutLocationInputObjectSchema } from './DishUpdateWithoutLocationInput.schema';
import { DishUncheckedUpdateWithoutLocationInputObjectSchema as DishUncheckedUpdateWithoutLocationInputObjectSchema } from './DishUncheckedUpdateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DishUpdateWithoutLocationInputObjectSchema), z.lazy(() => DishUncheckedUpdateWithoutLocationInputObjectSchema)])
}).strict();
export const DishUpdateWithWhereUniqueWithoutLocationInputObjectSchema: z.ZodType<Prisma.DishUpdateWithWhereUniqueWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishUpdateWithWhereUniqueWithoutLocationInput>;
export const DishUpdateWithWhereUniqueWithoutLocationInputObjectZodSchema = makeSchema();
