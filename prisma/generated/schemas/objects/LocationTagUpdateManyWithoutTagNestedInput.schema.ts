import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagCreateWithoutTagInputObjectSchema as LocationTagCreateWithoutTagInputObjectSchema } from './LocationTagCreateWithoutTagInput.schema';
import { LocationTagUncheckedCreateWithoutTagInputObjectSchema as LocationTagUncheckedCreateWithoutTagInputObjectSchema } from './LocationTagUncheckedCreateWithoutTagInput.schema';
import { LocationTagCreateOrConnectWithoutTagInputObjectSchema as LocationTagCreateOrConnectWithoutTagInputObjectSchema } from './LocationTagCreateOrConnectWithoutTagInput.schema';
import { LocationTagUpsertWithWhereUniqueWithoutTagInputObjectSchema as LocationTagUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './LocationTagUpsertWithWhereUniqueWithoutTagInput.schema';
import { LocationTagCreateManyTagInputEnvelopeObjectSchema as LocationTagCreateManyTagInputEnvelopeObjectSchema } from './LocationTagCreateManyTagInputEnvelope.schema';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './LocationTagWhereUniqueInput.schema';
import { LocationTagUpdateWithWhereUniqueWithoutTagInputObjectSchema as LocationTagUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './LocationTagUpdateWithWhereUniqueWithoutTagInput.schema';
import { LocationTagUpdateManyWithWhereWithoutTagInputObjectSchema as LocationTagUpdateManyWithWhereWithoutTagInputObjectSchema } from './LocationTagUpdateManyWithWhereWithoutTagInput.schema';
import { LocationTagScalarWhereInputObjectSchema as LocationTagScalarWhereInputObjectSchema } from './LocationTagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationTagCreateWithoutTagInputObjectSchema), z.lazy(() => LocationTagCreateWithoutTagInputObjectSchema).array(), z.lazy(() => LocationTagUncheckedCreateWithoutTagInputObjectSchema), z.lazy(() => LocationTagUncheckedCreateWithoutTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LocationTagCreateOrConnectWithoutTagInputObjectSchema), z.lazy(() => LocationTagCreateOrConnectWithoutTagInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LocationTagUpsertWithWhereUniqueWithoutTagInputObjectSchema), z.lazy(() => LocationTagUpsertWithWhereUniqueWithoutTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LocationTagCreateManyTagInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LocationTagWhereUniqueInputObjectSchema), z.lazy(() => LocationTagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LocationTagWhereUniqueInputObjectSchema), z.lazy(() => LocationTagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LocationTagWhereUniqueInputObjectSchema), z.lazy(() => LocationTagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LocationTagWhereUniqueInputObjectSchema), z.lazy(() => LocationTagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LocationTagUpdateWithWhereUniqueWithoutTagInputObjectSchema), z.lazy(() => LocationTagUpdateWithWhereUniqueWithoutTagInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LocationTagUpdateManyWithWhereWithoutTagInputObjectSchema), z.lazy(() => LocationTagUpdateManyWithWhereWithoutTagInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LocationTagScalarWhereInputObjectSchema), z.lazy(() => LocationTagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LocationTagUpdateManyWithoutTagNestedInputObjectSchema: z.ZodType<Prisma.LocationTagUpdateManyWithoutTagNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpdateManyWithoutTagNestedInput>;
export const LocationTagUpdateManyWithoutTagNestedInputObjectZodSchema = makeSchema();
