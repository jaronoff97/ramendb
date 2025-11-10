import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagCreateWithoutLocationInputObjectSchema as LocationTagCreateWithoutLocationInputObjectSchema } from './LocationTagCreateWithoutLocationInput.schema';
import { LocationTagUncheckedCreateWithoutLocationInputObjectSchema as LocationTagUncheckedCreateWithoutLocationInputObjectSchema } from './LocationTagUncheckedCreateWithoutLocationInput.schema';
import { LocationTagCreateOrConnectWithoutLocationInputObjectSchema as LocationTagCreateOrConnectWithoutLocationInputObjectSchema } from './LocationTagCreateOrConnectWithoutLocationInput.schema';
import { LocationTagUpsertWithWhereUniqueWithoutLocationInputObjectSchema as LocationTagUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './LocationTagUpsertWithWhereUniqueWithoutLocationInput.schema';
import { LocationTagCreateManyLocationInputEnvelopeObjectSchema as LocationTagCreateManyLocationInputEnvelopeObjectSchema } from './LocationTagCreateManyLocationInputEnvelope.schema';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './LocationTagWhereUniqueInput.schema';
import { LocationTagUpdateWithWhereUniqueWithoutLocationInputObjectSchema as LocationTagUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './LocationTagUpdateWithWhereUniqueWithoutLocationInput.schema';
import { LocationTagUpdateManyWithWhereWithoutLocationInputObjectSchema as LocationTagUpdateManyWithWhereWithoutLocationInputObjectSchema } from './LocationTagUpdateManyWithWhereWithoutLocationInput.schema';
import { LocationTagScalarWhereInputObjectSchema as LocationTagScalarWhereInputObjectSchema } from './LocationTagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationTagCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationTagCreateWithoutLocationInputObjectSchema).array(), z.lazy(() => LocationTagUncheckedCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationTagUncheckedCreateWithoutLocationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LocationTagCreateOrConnectWithoutLocationInputObjectSchema), z.lazy(() => LocationTagCreateOrConnectWithoutLocationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LocationTagUpsertWithWhereUniqueWithoutLocationInputObjectSchema), z.lazy(() => LocationTagUpsertWithWhereUniqueWithoutLocationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LocationTagCreateManyLocationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LocationTagWhereUniqueInputObjectSchema), z.lazy(() => LocationTagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LocationTagWhereUniqueInputObjectSchema), z.lazy(() => LocationTagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LocationTagWhereUniqueInputObjectSchema), z.lazy(() => LocationTagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LocationTagWhereUniqueInputObjectSchema), z.lazy(() => LocationTagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LocationTagUpdateWithWhereUniqueWithoutLocationInputObjectSchema), z.lazy(() => LocationTagUpdateWithWhereUniqueWithoutLocationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LocationTagUpdateManyWithWhereWithoutLocationInputObjectSchema), z.lazy(() => LocationTagUpdateManyWithWhereWithoutLocationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LocationTagScalarWhereInputObjectSchema), z.lazy(() => LocationTagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LocationTagUncheckedUpdateManyWithoutLocationNestedInputObjectSchema: z.ZodType<Prisma.LocationTagUncheckedUpdateManyWithoutLocationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUncheckedUpdateManyWithoutLocationNestedInput>;
export const LocationTagUncheckedUpdateManyWithoutLocationNestedInputObjectZodSchema = makeSchema();
