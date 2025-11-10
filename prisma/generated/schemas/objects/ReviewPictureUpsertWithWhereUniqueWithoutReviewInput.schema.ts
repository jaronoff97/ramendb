import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './ReviewPictureWhereUniqueInput.schema';
import { ReviewPictureUpdateWithoutReviewInputObjectSchema as ReviewPictureUpdateWithoutReviewInputObjectSchema } from './ReviewPictureUpdateWithoutReviewInput.schema';
import { ReviewPictureUncheckedUpdateWithoutReviewInputObjectSchema as ReviewPictureUncheckedUpdateWithoutReviewInputObjectSchema } from './ReviewPictureUncheckedUpdateWithoutReviewInput.schema';
import { ReviewPictureCreateWithoutReviewInputObjectSchema as ReviewPictureCreateWithoutReviewInputObjectSchema } from './ReviewPictureCreateWithoutReviewInput.schema';
import { ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema as ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema } from './ReviewPictureUncheckedCreateWithoutReviewInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewPictureUpdateWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureUncheckedUpdateWithoutReviewInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewPictureCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema)])
}).strict();
export const ReviewPictureUpsertWithWhereUniqueWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewPictureUpsertWithWhereUniqueWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureUpsertWithWhereUniqueWithoutReviewInput>;
export const ReviewPictureUpsertWithWhereUniqueWithoutReviewInputObjectZodSchema = makeSchema();
