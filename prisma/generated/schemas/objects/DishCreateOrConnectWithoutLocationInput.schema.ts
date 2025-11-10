import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './DishWhereUniqueInput.schema';
import { DishCreateWithoutLocationInputObjectSchema as DishCreateWithoutLocationInputObjectSchema } from './DishCreateWithoutLocationInput.schema';
import { DishUncheckedCreateWithoutLocationInputObjectSchema as DishUncheckedCreateWithoutLocationInputObjectSchema } from './DishUncheckedCreateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DishCreateWithoutLocationInputObjectSchema), z.lazy(() => DishUncheckedCreateWithoutLocationInputObjectSchema)])
}).strict();
export const DishCreateOrConnectWithoutLocationInputObjectSchema: z.ZodType<Prisma.DishCreateOrConnectWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishCreateOrConnectWithoutLocationInput>;
export const DishCreateOrConnectWithoutLocationInputObjectZodSchema = makeSchema();
