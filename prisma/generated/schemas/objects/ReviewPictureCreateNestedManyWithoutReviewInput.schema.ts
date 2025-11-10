import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureCreateWithoutReviewInputObjectSchema as ReviewPictureCreateWithoutReviewInputObjectSchema } from './ReviewPictureCreateWithoutReviewInput.schema';
import { ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema as ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema } from './ReviewPictureUncheckedCreateWithoutReviewInput.schema';
import { ReviewPictureCreateOrConnectWithoutReviewInputObjectSchema as ReviewPictureCreateOrConnectWithoutReviewInputObjectSchema } from './ReviewPictureCreateOrConnectWithoutReviewInput.schema';
import { ReviewPictureCreateManyReviewInputEnvelopeObjectSchema as ReviewPictureCreateManyReviewInputEnvelopeObjectSchema } from './ReviewPictureCreateManyReviewInputEnvelope.schema';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './ReviewPictureWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewPictureCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureCreateWithoutReviewInputObjectSchema).array(), z.lazy(() => ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewPictureCreateOrConnectWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureCreateOrConnectWithoutReviewInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewPictureCreateManyReviewInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema), z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewPictureCreateNestedManyWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewPictureCreateNestedManyWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureCreateNestedManyWithoutReviewInput>;
export const ReviewPictureCreateNestedManyWithoutReviewInputObjectZodSchema = makeSchema();
