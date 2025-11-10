import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagCreateWithoutDishInputObjectSchema as DishTagCreateWithoutDishInputObjectSchema } from './DishTagCreateWithoutDishInput.schema';
import { DishTagUncheckedCreateWithoutDishInputObjectSchema as DishTagUncheckedCreateWithoutDishInputObjectSchema } from './DishTagUncheckedCreateWithoutDishInput.schema';
import { DishTagCreateOrConnectWithoutDishInputObjectSchema as DishTagCreateOrConnectWithoutDishInputObjectSchema } from './DishTagCreateOrConnectWithoutDishInput.schema';
import { DishTagUpsertWithWhereUniqueWithoutDishInputObjectSchema as DishTagUpsertWithWhereUniqueWithoutDishInputObjectSchema } from './DishTagUpsertWithWhereUniqueWithoutDishInput.schema';
import { DishTagCreateManyDishInputEnvelopeObjectSchema as DishTagCreateManyDishInputEnvelopeObjectSchema } from './DishTagCreateManyDishInputEnvelope.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './DishTagWhereUniqueInput.schema';
import { DishTagUpdateWithWhereUniqueWithoutDishInputObjectSchema as DishTagUpdateWithWhereUniqueWithoutDishInputObjectSchema } from './DishTagUpdateWithWhereUniqueWithoutDishInput.schema';
import { DishTagUpdateManyWithWhereWithoutDishInputObjectSchema as DishTagUpdateManyWithWhereWithoutDishInputObjectSchema } from './DishTagUpdateManyWithWhereWithoutDishInput.schema';
import { DishTagScalarWhereInputObjectSchema as DishTagScalarWhereInputObjectSchema } from './DishTagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DishTagCreateWithoutDishInputObjectSchema), z.lazy(() => DishTagCreateWithoutDishInputObjectSchema).array(), z.lazy(() => DishTagUncheckedCreateWithoutDishInputObjectSchema), z.lazy(() => DishTagUncheckedCreateWithoutDishInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DishTagCreateOrConnectWithoutDishInputObjectSchema), z.lazy(() => DishTagCreateOrConnectWithoutDishInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DishTagUpsertWithWhereUniqueWithoutDishInputObjectSchema), z.lazy(() => DishTagUpsertWithWhereUniqueWithoutDishInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DishTagCreateManyDishInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DishTagWhereUniqueInputObjectSchema), z.lazy(() => DishTagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DishTagWhereUniqueInputObjectSchema), z.lazy(() => DishTagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DishTagWhereUniqueInputObjectSchema), z.lazy(() => DishTagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DishTagWhereUniqueInputObjectSchema), z.lazy(() => DishTagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DishTagUpdateWithWhereUniqueWithoutDishInputObjectSchema), z.lazy(() => DishTagUpdateWithWhereUniqueWithoutDishInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DishTagUpdateManyWithWhereWithoutDishInputObjectSchema), z.lazy(() => DishTagUpdateManyWithWhereWithoutDishInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DishTagScalarWhereInputObjectSchema), z.lazy(() => DishTagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DishTagUpdateManyWithoutDishNestedInputObjectSchema: z.ZodType<Prisma.DishTagUpdateManyWithoutDishNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpdateManyWithoutDishNestedInput>;
export const DishTagUpdateManyWithoutDishNestedInputObjectZodSchema = makeSchema();
