import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutLocationInputObjectSchema as ReviewCreateWithoutLocationInputObjectSchema } from './ReviewCreateWithoutLocationInput.schema';
import { ReviewUncheckedCreateWithoutLocationInputObjectSchema as ReviewUncheckedCreateWithoutLocationInputObjectSchema } from './ReviewUncheckedCreateWithoutLocationInput.schema';
import { ReviewCreateOrConnectWithoutLocationInputObjectSchema as ReviewCreateOrConnectWithoutLocationInputObjectSchema } from './ReviewCreateOrConnectWithoutLocationInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutLocationInputObjectSchema as ReviewUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutLocationInput.schema';
import { ReviewCreateManyLocationInputEnvelopeObjectSchema as ReviewCreateManyLocationInputEnvelopeObjectSchema } from './ReviewCreateManyLocationInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutLocationInputObjectSchema as ReviewUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutLocationInput.schema';
import { ReviewUpdateManyWithWhereWithoutLocationInputObjectSchema as ReviewUpdateManyWithWhereWithoutLocationInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutLocationInput.schema';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutLocationInputObjectSchema), z.lazy(() => ReviewCreateWithoutLocationInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutLocationInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutLocationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutLocationInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutLocationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewUpsertWithWhereUniqueWithoutLocationInputObjectSchema), z.lazy(() => ReviewUpsertWithWhereUniqueWithoutLocationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyLocationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewUpdateWithWhereUniqueWithoutLocationInputObjectSchema), z.lazy(() => ReviewUpdateWithWhereUniqueWithoutLocationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewUpdateManyWithWhereWithoutLocationInputObjectSchema), z.lazy(() => ReviewUpdateManyWithWhereWithoutLocationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUncheckedUpdateManyWithoutLocationNestedInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutLocationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutLocationNestedInput>;
export const ReviewUncheckedUpdateManyWithoutLocationNestedInputObjectZodSchema = makeSchema();
