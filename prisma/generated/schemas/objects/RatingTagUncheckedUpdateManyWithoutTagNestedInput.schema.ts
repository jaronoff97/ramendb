import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagCreateWithoutTagInputObjectSchema as RatingTagCreateWithoutTagInputObjectSchema } from './RatingTagCreateWithoutTagInput.schema';
import { RatingTagUncheckedCreateWithoutTagInputObjectSchema as RatingTagUncheckedCreateWithoutTagInputObjectSchema } from './RatingTagUncheckedCreateWithoutTagInput.schema';
import { RatingTagCreateOrConnectWithoutTagInputObjectSchema as RatingTagCreateOrConnectWithoutTagInputObjectSchema } from './RatingTagCreateOrConnectWithoutTagInput.schema';
import { RatingTagUpsertWithWhereUniqueWithoutTagInputObjectSchema as RatingTagUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './RatingTagUpsertWithWhereUniqueWithoutTagInput.schema';
import { RatingTagCreateManyTagInputEnvelopeObjectSchema as RatingTagCreateManyTagInputEnvelopeObjectSchema } from './RatingTagCreateManyTagInputEnvelope.schema';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './RatingTagWhereUniqueInput.schema';
import { RatingTagUpdateWithWhereUniqueWithoutTagInputObjectSchema as RatingTagUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './RatingTagUpdateWithWhereUniqueWithoutTagInput.schema';
import { RatingTagUpdateManyWithWhereWithoutTagInputObjectSchema as RatingTagUpdateManyWithWhereWithoutTagInputObjectSchema } from './RatingTagUpdateManyWithWhereWithoutTagInput.schema';
import { RatingTagScalarWhereInputObjectSchema as RatingTagScalarWhereInputObjectSchema } from './RatingTagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingTagCreateWithoutTagInputObjectSchema), z.lazy(() => RatingTagCreateWithoutTagInputObjectSchema).array(), z.lazy(() => RatingTagUncheckedCreateWithoutTagInputObjectSchema), z.lazy(() => RatingTagUncheckedCreateWithoutTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RatingTagCreateOrConnectWithoutTagInputObjectSchema), z.lazy(() => RatingTagCreateOrConnectWithoutTagInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RatingTagUpsertWithWhereUniqueWithoutTagInputObjectSchema), z.lazy(() => RatingTagUpsertWithWhereUniqueWithoutTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RatingTagCreateManyTagInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RatingTagWhereUniqueInputObjectSchema), z.lazy(() => RatingTagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RatingTagWhereUniqueInputObjectSchema), z.lazy(() => RatingTagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RatingTagWhereUniqueInputObjectSchema), z.lazy(() => RatingTagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RatingTagWhereUniqueInputObjectSchema), z.lazy(() => RatingTagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RatingTagUpdateWithWhereUniqueWithoutTagInputObjectSchema), z.lazy(() => RatingTagUpdateWithWhereUniqueWithoutTagInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RatingTagUpdateManyWithWhereWithoutTagInputObjectSchema), z.lazy(() => RatingTagUpdateManyWithWhereWithoutTagInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RatingTagScalarWhereInputObjectSchema), z.lazy(() => RatingTagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RatingTagUncheckedUpdateManyWithoutTagNestedInputObjectSchema: z.ZodType<Prisma.RatingTagUncheckedUpdateManyWithoutTagNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUncheckedUpdateManyWithoutTagNestedInput>;
export const RatingTagUncheckedUpdateManyWithoutTagNestedInputObjectZodSchema = makeSchema();
