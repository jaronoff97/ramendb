import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './ReviewPictureWhereUniqueInput.schema';
import { ReviewPictureCreateWithoutReviewInputObjectSchema as ReviewPictureCreateWithoutReviewInputObjectSchema } from './ReviewPictureCreateWithoutReviewInput.schema';
import { ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema as ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema } from './ReviewPictureUncheckedCreateWithoutReviewInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewPictureCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema)])
}).strict();
export const ReviewPictureCreateOrConnectWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewPictureCreateOrConnectWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureCreateOrConnectWithoutReviewInput>;
export const ReviewPictureCreateOrConnectWithoutReviewInputObjectZodSchema = makeSchema();
