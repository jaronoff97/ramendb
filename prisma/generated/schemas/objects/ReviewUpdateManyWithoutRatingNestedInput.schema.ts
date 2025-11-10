import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutRatingInputObjectSchema as ReviewCreateWithoutRatingInputObjectSchema } from './ReviewCreateWithoutRatingInput.schema';
import { ReviewUncheckedCreateWithoutRatingInputObjectSchema as ReviewUncheckedCreateWithoutRatingInputObjectSchema } from './ReviewUncheckedCreateWithoutRatingInput.schema';
import { ReviewCreateOrConnectWithoutRatingInputObjectSchema as ReviewCreateOrConnectWithoutRatingInputObjectSchema } from './ReviewCreateOrConnectWithoutRatingInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutRatingInputObjectSchema as ReviewUpsertWithWhereUniqueWithoutRatingInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutRatingInput.schema';
import { ReviewCreateManyRatingInputEnvelopeObjectSchema as ReviewCreateManyRatingInputEnvelopeObjectSchema } from './ReviewCreateManyRatingInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutRatingInputObjectSchema as ReviewUpdateWithWhereUniqueWithoutRatingInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutRatingInput.schema';
import { ReviewUpdateManyWithWhereWithoutRatingInputObjectSchema as ReviewUpdateManyWithWhereWithoutRatingInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutRatingInput.schema';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutRatingInputObjectSchema), z.lazy(() => ReviewCreateWithoutRatingInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutRatingInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutRatingInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutRatingInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutRatingInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewUpsertWithWhereUniqueWithoutRatingInputObjectSchema), z.lazy(() => ReviewUpsertWithWhereUniqueWithoutRatingInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyRatingInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewUpdateWithWhereUniqueWithoutRatingInputObjectSchema), z.lazy(() => ReviewUpdateWithWhereUniqueWithoutRatingInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewUpdateManyWithWhereWithoutRatingInputObjectSchema), z.lazy(() => ReviewUpdateManyWithWhereWithoutRatingInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUpdateManyWithoutRatingNestedInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutRatingNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithoutRatingNestedInput>;
export const ReviewUpdateManyWithoutRatingNestedInputObjectZodSchema = makeSchema();
