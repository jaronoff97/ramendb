import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagCreateWithoutDishInputObjectSchema as DishTagCreateWithoutDishInputObjectSchema } from './DishTagCreateWithoutDishInput.schema';
import { DishTagUncheckedCreateWithoutDishInputObjectSchema as DishTagUncheckedCreateWithoutDishInputObjectSchema } from './DishTagUncheckedCreateWithoutDishInput.schema';
import { DishTagCreateOrConnectWithoutDishInputObjectSchema as DishTagCreateOrConnectWithoutDishInputObjectSchema } from './DishTagCreateOrConnectWithoutDishInput.schema';
import { DishTagCreateManyDishInputEnvelopeObjectSchema as DishTagCreateManyDishInputEnvelopeObjectSchema } from './DishTagCreateManyDishInputEnvelope.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './DishTagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DishTagCreateWithoutDishInputObjectSchema), z.lazy(() => DishTagCreateWithoutDishInputObjectSchema).array(), z.lazy(() => DishTagUncheckedCreateWithoutDishInputObjectSchema), z.lazy(() => DishTagUncheckedCreateWithoutDishInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DishTagCreateOrConnectWithoutDishInputObjectSchema), z.lazy(() => DishTagCreateOrConnectWithoutDishInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DishTagCreateManyDishInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DishTagWhereUniqueInputObjectSchema), z.lazy(() => DishTagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DishTagCreateNestedManyWithoutDishInputObjectSchema: z.ZodType<Prisma.DishTagCreateNestedManyWithoutDishInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateNestedManyWithoutDishInput>;
export const DishTagCreateNestedManyWithoutDishInputObjectZodSchema = makeSchema();
