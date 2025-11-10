import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateWithoutUserInputObjectSchema as RatingCreateWithoutUserInputObjectSchema } from './RatingCreateWithoutUserInput.schema';
import { RatingUncheckedCreateWithoutUserInputObjectSchema as RatingUncheckedCreateWithoutUserInputObjectSchema } from './RatingUncheckedCreateWithoutUserInput.schema';
import { RatingCreateOrConnectWithoutUserInputObjectSchema as RatingCreateOrConnectWithoutUserInputObjectSchema } from './RatingCreateOrConnectWithoutUserInput.schema';
import { RatingUpsertWithWhereUniqueWithoutUserInputObjectSchema as RatingUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './RatingUpsertWithWhereUniqueWithoutUserInput.schema';
import { RatingCreateManyUserInputEnvelopeObjectSchema as RatingCreateManyUserInputEnvelopeObjectSchema } from './RatingCreateManyUserInputEnvelope.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingUpdateWithWhereUniqueWithoutUserInputObjectSchema as RatingUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './RatingUpdateWithWhereUniqueWithoutUserInput.schema';
import { RatingUpdateManyWithWhereWithoutUserInputObjectSchema as RatingUpdateManyWithWhereWithoutUserInputObjectSchema } from './RatingUpdateManyWithWhereWithoutUserInput.schema';
import { RatingScalarWhereInputObjectSchema as RatingScalarWhereInputObjectSchema } from './RatingScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingCreateWithoutUserInputObjectSchema), z.lazy(() => RatingCreateWithoutUserInputObjectSchema).array(), z.lazy(() => RatingUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RatingCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => RatingCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RatingUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => RatingUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RatingCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RatingWhereUniqueInputObjectSchema), z.lazy(() => RatingWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RatingWhereUniqueInputObjectSchema), z.lazy(() => RatingWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RatingWhereUniqueInputObjectSchema), z.lazy(() => RatingWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RatingWhereUniqueInputObjectSchema), z.lazy(() => RatingWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RatingUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => RatingUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RatingUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => RatingUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RatingScalarWhereInputObjectSchema), z.lazy(() => RatingScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RatingUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.RatingUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateManyWithoutUserNestedInput>;
export const RatingUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
