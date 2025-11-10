import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureScalarWhereInputObjectSchema as ReviewPictureScalarWhereInputObjectSchema } from './ReviewPictureScalarWhereInput.schema';
import { ReviewPictureUpdateManyMutationInputObjectSchema as ReviewPictureUpdateManyMutationInputObjectSchema } from './ReviewPictureUpdateManyMutationInput.schema';
import { ReviewPictureUncheckedUpdateManyWithoutReviewInputObjectSchema as ReviewPictureUncheckedUpdateManyWithoutReviewInputObjectSchema } from './ReviewPictureUncheckedUpdateManyWithoutReviewInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewPictureScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewPictureUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewPictureUncheckedUpdateManyWithoutReviewInputObjectSchema)])
}).strict();
export const ReviewPictureUpdateManyWithWhereWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewPictureUpdateManyWithWhereWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureUpdateManyWithWhereWithoutReviewInput>;
export const ReviewPictureUpdateManyWithWhereWithoutReviewInputObjectZodSchema = makeSchema();
