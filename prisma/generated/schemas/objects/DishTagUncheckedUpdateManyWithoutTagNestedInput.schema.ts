import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagCreateWithoutTagInputObjectSchema as DishTagCreateWithoutTagInputObjectSchema } from './DishTagCreateWithoutTagInput.schema';
import { DishTagUncheckedCreateWithoutTagInputObjectSchema as DishTagUncheckedCreateWithoutTagInputObjectSchema } from './DishTagUncheckedCreateWithoutTagInput.schema';
import { DishTagCreateOrConnectWithoutTagInputObjectSchema as DishTagCreateOrConnectWithoutTagInputObjectSchema } from './DishTagCreateOrConnectWithoutTagInput.schema';
import { DishTagUpsertWithWhereUniqueWithoutTagInputObjectSchema as DishTagUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './DishTagUpsertWithWhereUniqueWithoutTagInput.schema';
import { DishTagCreateManyTagInputEnvelopeObjectSchema as DishTagCreateManyTagInputEnvelopeObjectSchema } from './DishTagCreateManyTagInputEnvelope.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './DishTagWhereUniqueInput.schema';
import { DishTagUpdateWithWhereUniqueWithoutTagInputObjectSchema as DishTagUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './DishTagUpdateWithWhereUniqueWithoutTagInput.schema';
import { DishTagUpdateManyWithWhereWithoutTagInputObjectSchema as DishTagUpdateManyWithWhereWithoutTagInputObjectSchema } from './DishTagUpdateManyWithWhereWithoutTagInput.schema';
import { DishTagScalarWhereInputObjectSchema as DishTagScalarWhereInputObjectSchema } from './DishTagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DishTagCreateWithoutTagInputObjectSchema), z.lazy(() => DishTagCreateWithoutTagInputObjectSchema).array(), z.lazy(() => DishTagUncheckedCreateWithoutTagInputObjectSchema), z.lazy(() => DishTagUncheckedCreateWithoutTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DishTagCreateOrConnectWithoutTagInputObjectSchema), z.lazy(() => DishTagCreateOrConnectWithoutTagInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DishTagUpsertWithWhereUniqueWithoutTagInputObjectSchema), z.lazy(() => DishTagUpsertWithWhereUniqueWithoutTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DishTagCreateManyTagInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DishTagWhereUniqueInputObjectSchema), z.lazy(() => DishTagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DishTagWhereUniqueInputObjectSchema), z.lazy(() => DishTagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DishTagWhereUniqueInputObjectSchema), z.lazy(() => DishTagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DishTagWhereUniqueInputObjectSchema), z.lazy(() => DishTagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DishTagUpdateWithWhereUniqueWithoutTagInputObjectSchema), z.lazy(() => DishTagUpdateWithWhereUniqueWithoutTagInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DishTagUpdateManyWithWhereWithoutTagInputObjectSchema), z.lazy(() => DishTagUpdateManyWithWhereWithoutTagInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DishTagScalarWhereInputObjectSchema), z.lazy(() => DishTagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DishTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema: z.ZodType<Prisma.DishTagUncheckedUpdateManyWithoutTagNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUncheckedUpdateManyWithoutTagNestedInput>;
export const DishTagUncheckedUpdateManyWithoutTagNestedInputObjectZodSchema = makeSchema();
