import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateWithoutLocationInputObjectSchema as RatingCreateWithoutLocationInputObjectSchema } from './RatingCreateWithoutLocationInput.schema';
import { RatingUncheckedCreateWithoutLocationInputObjectSchema as RatingUncheckedCreateWithoutLocationInputObjectSchema } from './RatingUncheckedCreateWithoutLocationInput.schema';
import { RatingCreateOrConnectWithoutLocationInputObjectSchema as RatingCreateOrConnectWithoutLocationInputObjectSchema } from './RatingCreateOrConnectWithoutLocationInput.schema';
import { RatingUpsertWithWhereUniqueWithoutLocationInputObjectSchema as RatingUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './RatingUpsertWithWhereUniqueWithoutLocationInput.schema';
import { RatingCreateManyLocationInputEnvelopeObjectSchema as RatingCreateManyLocationInputEnvelopeObjectSchema } from './RatingCreateManyLocationInputEnvelope.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingUpdateWithWhereUniqueWithoutLocationInputObjectSchema as RatingUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './RatingUpdateWithWhereUniqueWithoutLocationInput.schema';
import { RatingUpdateManyWithWhereWithoutLocationInputObjectSchema as RatingUpdateManyWithWhereWithoutLocationInputObjectSchema } from './RatingUpdateManyWithWhereWithoutLocationInput.schema';
import { RatingScalarWhereInputObjectSchema as RatingScalarWhereInputObjectSchema } from './RatingScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingCreateWithoutLocationInputObjectSchema), z.lazy(() => RatingCreateWithoutLocationInputObjectSchema).array(), z.lazy(() => RatingUncheckedCreateWithoutLocationInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutLocationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RatingCreateOrConnectWithoutLocationInputObjectSchema), z.lazy(() => RatingCreateOrConnectWithoutLocationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RatingUpsertWithWhereUniqueWithoutLocationInputObjectSchema), z.lazy(() => RatingUpsertWithWhereUniqueWithoutLocationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RatingCreateManyLocationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RatingWhereUniqueInputObjectSchema), z.lazy(() => RatingWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RatingWhereUniqueInputObjectSchema), z.lazy(() => RatingWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RatingWhereUniqueInputObjectSchema), z.lazy(() => RatingWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RatingWhereUniqueInputObjectSchema), z.lazy(() => RatingWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RatingUpdateWithWhereUniqueWithoutLocationInputObjectSchema), z.lazy(() => RatingUpdateWithWhereUniqueWithoutLocationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RatingUpdateManyWithWhereWithoutLocationInputObjectSchema), z.lazy(() => RatingUpdateManyWithWhereWithoutLocationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RatingScalarWhereInputObjectSchema), z.lazy(() => RatingScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RatingUncheckedUpdateManyWithoutLocationNestedInputObjectSchema: z.ZodType<Prisma.RatingUncheckedUpdateManyWithoutLocationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUncheckedUpdateManyWithoutLocationNestedInput>;
export const RatingUncheckedUpdateManyWithoutLocationNestedInputObjectZodSchema = makeSchema();
