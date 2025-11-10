import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagCreateWithoutReviewInputObjectSchema as ReviewTagCreateWithoutReviewInputObjectSchema } from './ReviewTagCreateWithoutReviewInput.schema';
import { ReviewTagUncheckedCreateWithoutReviewInputObjectSchema as ReviewTagUncheckedCreateWithoutReviewInputObjectSchema } from './ReviewTagUncheckedCreateWithoutReviewInput.schema';
import { ReviewTagCreateOrConnectWithoutReviewInputObjectSchema as ReviewTagCreateOrConnectWithoutReviewInputObjectSchema } from './ReviewTagCreateOrConnectWithoutReviewInput.schema';
import { ReviewTagCreateManyReviewInputEnvelopeObjectSchema as ReviewTagCreateManyReviewInputEnvelopeObjectSchema } from './ReviewTagCreateManyReviewInputEnvelope.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './ReviewTagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewTagCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagCreateWithoutReviewInputObjectSchema).array(), z.lazy(() => ReviewTagUncheckedCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagUncheckedCreateWithoutReviewInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewTagCreateOrConnectWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagCreateOrConnectWithoutReviewInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewTagCreateManyReviewInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewTagWhereUniqueInputObjectSchema), z.lazy(() => ReviewTagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewTagUncheckedCreateNestedManyWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUncheckedCreateNestedManyWithoutReviewInput>;
export const ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectZodSchema = makeSchema();
