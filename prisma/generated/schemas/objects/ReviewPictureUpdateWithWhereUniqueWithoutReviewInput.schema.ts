import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './ReviewPictureWhereUniqueInput.schema';
import { ReviewPictureUpdateWithoutReviewInputObjectSchema as ReviewPictureUpdateWithoutReviewInputObjectSchema } from './ReviewPictureUpdateWithoutReviewInput.schema';
import { ReviewPictureUncheckedUpdateWithoutReviewInputObjectSchema as ReviewPictureUncheckedUpdateWithoutReviewInputObjectSchema } from './ReviewPictureUncheckedUpdateWithoutReviewInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewPictureWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewPictureUpdateWithoutReviewInputObjectSchema), z.lazy(() => ReviewPictureUncheckedUpdateWithoutReviewInputObjectSchema)])
}).strict();
export const ReviewPictureUpdateWithWhereUniqueWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewPictureUpdateWithWhereUniqueWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureUpdateWithWhereUniqueWithoutReviewInput>;
export const ReviewPictureUpdateWithWhereUniqueWithoutReviewInputObjectZodSchema = makeSchema();
