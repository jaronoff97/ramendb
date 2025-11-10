import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureCreateWithoutReviewInputObjectSchema as ReviewPictureCreateWithoutReviewInputObjectSchema } from './ReviewPictureCreateWithoutReviewInput.schema';
import { ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema as ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema } from './ReviewPictureUncheckedCreateWithoutReviewInput.schema';
import { ReviewPictureCreateOrConnectWithoutReviewInputObjectSchema as ReviewPictureCreateOrConnectWithoutReviewInputObjectSchema } from './ReviewPictureCreateOrConnectWithoutReviewInput.schema';
import { ReviewPictureUpsertWithWhereUniqueWithoutReviewInputObjectSchema as ReviewPictureUpsertWithWhereUniqueWithoutReviewInputObjectSchema } from './ReviewPictureUpsertWithWhereUniqueWithoutReviewInput.schema';
import { ReviewPictureCreateManyReviewInputEnvelopeObjectSchema as ReviewPictureCreateManyReviewInputEnvelopeObjectSchema } from './ReviewPictureCreateManyReviewInputEnvelope.schema';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './ReviewPictureWhereUniqueInput.schema';
import { ReviewPictureUpdateWithWhereUniqueWithoutReviewInputObjectSchema as ReviewPictureUpdateWithWhereUniqueWithoutReviewInputObjectSchema } from './ReviewPictureUpdateWithWhereUniqueWithoutReviewInput.schema';
import { ReviewPictureUpdateManyWithWhereWithoutReviewInputObjectSchema as ReviewPictureUpdateManyWithWhereWithoutReviewInputObjectSchema } from './ReviewPictureUpdateManyWithWhereWithoutReviewInput.schema';
import { ReviewPictureScalarWhereInputObjectSchema as ReviewPictureScalarWhereInputObjectSchema } from './ReviewPictureScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewPictureCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureCreateWithoutReviewInputObjectSchema).array(), z.lazy(() => ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewPictureCreateOrConnectWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureCreateOrConnectWithoutReviewInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewPictureUpsertWithWhereUniqueWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureUpsertWithWhereUniqueWithoutReviewInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewPictureCreateManyReviewInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema), z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema), z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema), z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema), z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewPictureUpdateWithWhereUniqueWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureUpdateWithWhereUniqueWithoutReviewInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewPictureUpdateManyWithWhereWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureUpdateManyWithWhereWithoutReviewInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewPictureScalarWhereInputObjectSchema), z.lazy(() => ReviewPictureScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewPictureUncheckedUpdateManyWithoutReviewNestedInputObjectSchema: z.ZodType<Prisma.ReviewPictureUncheckedUpdateManyWithoutReviewNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureUncheckedUpdateManyWithoutReviewNestedInput>;
export const ReviewPictureUncheckedUpdateManyWithoutReviewNestedInputObjectZodSchema = makeSchema();
