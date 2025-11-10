import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagCreateWithoutReviewInputObjectSchema as ReviewTagCreateWithoutReviewInputObjectSchema } from './ReviewTagCreateWithoutReviewInput.schema';
import { ReviewTagUncheckedCreateWithoutReviewInputObjectSchema as ReviewTagUncheckedCreateWithoutReviewInputObjectSchema } from './ReviewTagUncheckedCreateWithoutReviewInput.schema';
import { ReviewTagCreateOrConnectWithoutReviewInputObjectSchema as ReviewTagCreateOrConnectWithoutReviewInputObjectSchema } from './ReviewTagCreateOrConnectWithoutReviewInput.schema';
import { ReviewTagUpsertWithWhereUniqueWithoutReviewInputObjectSchema as ReviewTagUpsertWithWhereUniqueWithoutReviewInputObjectSchema } from './ReviewTagUpsertWithWhereUniqueWithoutReviewInput.schema';
import { ReviewTagCreateManyReviewInputEnvelopeObjectSchema as ReviewTagCreateManyReviewInputEnvelopeObjectSchema } from './ReviewTagCreateManyReviewInputEnvelope.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './ReviewTagWhereUniqueInput.schema';
import { ReviewTagUpdateWithWhereUniqueWithoutReviewInputObjectSchema as ReviewTagUpdateWithWhereUniqueWithoutReviewInputObjectSchema } from './ReviewTagUpdateWithWhereUniqueWithoutReviewInput.schema';
import { ReviewTagUpdateManyWithWhereWithoutReviewInputObjectSchema as ReviewTagUpdateManyWithWhereWithoutReviewInputObjectSchema } from './ReviewTagUpdateManyWithWhereWithoutReviewInput.schema';
import { ReviewTagScalarWhereInputObjectSchema as ReviewTagScalarWhereInputObjectSchema } from './ReviewTagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewTagCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagCreateWithoutReviewInputObjectSchema).array(), z.lazy(() => ReviewTagUncheckedCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagUncheckedCreateWithoutReviewInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewTagCreateOrConnectWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagCreateOrConnectWithoutReviewInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewTagUpsertWithWhereUniqueWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagUpsertWithWhereUniqueWithoutReviewInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewTagCreateManyReviewInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewTagWhereUniqueInputObjectSchema), z.lazy(() => ReviewTagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewTagWhereUniqueInputObjectSchema), z.lazy(() => ReviewTagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewTagWhereUniqueInputObjectSchema), z.lazy(() => ReviewTagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewTagWhereUniqueInputObjectSchema), z.lazy(() => ReviewTagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewTagUpdateWithWhereUniqueWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagUpdateWithWhereUniqueWithoutReviewInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewTagUpdateManyWithWhereWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagUpdateManyWithWhereWithoutReviewInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewTagScalarWhereInputObjectSchema), z.lazy(() => ReviewTagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewTagUpdateManyWithoutReviewNestedInputObjectSchema: z.ZodType<Prisma.ReviewTagUpdateManyWithoutReviewNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpdateManyWithoutReviewNestedInput>;
export const ReviewTagUpdateManyWithoutReviewNestedInputObjectZodSchema = makeSchema();
