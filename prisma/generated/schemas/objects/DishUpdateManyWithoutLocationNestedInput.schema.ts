import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishCreateWithoutLocationInputObjectSchema as DishCreateWithoutLocationInputObjectSchema } from './DishCreateWithoutLocationInput.schema';
import { DishUncheckedCreateWithoutLocationInputObjectSchema as DishUncheckedCreateWithoutLocationInputObjectSchema } from './DishUncheckedCreateWithoutLocationInput.schema';
import { DishCreateOrConnectWithoutLocationInputObjectSchema as DishCreateOrConnectWithoutLocationInputObjectSchema } from './DishCreateOrConnectWithoutLocationInput.schema';
import { DishUpsertWithWhereUniqueWithoutLocationInputObjectSchema as DishUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './DishUpsertWithWhereUniqueWithoutLocationInput.schema';
import { DishCreateManyLocationInputEnvelopeObjectSchema as DishCreateManyLocationInputEnvelopeObjectSchema } from './DishCreateManyLocationInputEnvelope.schema';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './DishWhereUniqueInput.schema';
import { DishUpdateWithWhereUniqueWithoutLocationInputObjectSchema as DishUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './DishUpdateWithWhereUniqueWithoutLocationInput.schema';
import { DishUpdateManyWithWhereWithoutLocationInputObjectSchema as DishUpdateManyWithWhereWithoutLocationInputObjectSchema } from './DishUpdateManyWithWhereWithoutLocationInput.schema';
import { DishScalarWhereInputObjectSchema as DishScalarWhereInputObjectSchema } from './DishScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DishCreateWithoutLocationInputObjectSchema), z.lazy(() => DishCreateWithoutLocationInputObjectSchema).array(), z.lazy(() => DishUncheckedCreateWithoutLocationInputObjectSchema), z.lazy(() => DishUncheckedCreateWithoutLocationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DishCreateOrConnectWithoutLocationInputObjectSchema), z.lazy(() => DishCreateOrConnectWithoutLocationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DishUpsertWithWhereUniqueWithoutLocationInputObjectSchema), z.lazy(() => DishUpsertWithWhereUniqueWithoutLocationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DishCreateManyLocationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DishWhereUniqueInputObjectSchema), z.lazy(() => DishWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DishWhereUniqueInputObjectSchema), z.lazy(() => DishWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DishWhereUniqueInputObjectSchema), z.lazy(() => DishWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DishWhereUniqueInputObjectSchema), z.lazy(() => DishWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DishUpdateWithWhereUniqueWithoutLocationInputObjectSchema), z.lazy(() => DishUpdateWithWhereUniqueWithoutLocationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DishUpdateManyWithWhereWithoutLocationInputObjectSchema), z.lazy(() => DishUpdateManyWithWhereWithoutLocationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DishScalarWhereInputObjectSchema), z.lazy(() => DishScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DishUpdateManyWithoutLocationNestedInputObjectSchema: z.ZodType<Prisma.DishUpdateManyWithoutLocationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DishUpdateManyWithoutLocationNestedInput>;
export const DishUpdateManyWithoutLocationNestedInputObjectZodSchema = makeSchema();
