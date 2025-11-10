import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './ReviewTagWhereUniqueInput.schema';
import { ReviewTagCreateWithoutReviewInputObjectSchema as ReviewTagCreateWithoutReviewInputObjectSchema } from './ReviewTagCreateWithoutReviewInput.schema';
import { ReviewTagUncheckedCreateWithoutReviewInputObjectSchema as ReviewTagUncheckedCreateWithoutReviewInputObjectSchema } from './ReviewTagUncheckedCreateWithoutReviewInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewTagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewTagCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagUncheckedCreateWithoutReviewInputObjectSchema)])
}).strict();
export const ReviewTagCreateOrConnectWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewTagCreateOrConnectWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateOrConnectWithoutReviewInput>;
export const ReviewTagCreateOrConnectWithoutReviewInputObjectZodSchema = makeSchema();
