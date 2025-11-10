import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureUncheckedCreateNestedManyWithoutReviewInputObjectSchema as ReviewPictureUncheckedCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewPictureUncheckedCreateNestedManyWithoutReviewInput.schema';
import { ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectSchema as ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewTagUncheckedCreateNestedManyWithoutReviewInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  userId: z.string(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pictures: z.lazy(() => ReviewPictureUncheckedCreateNestedManyWithoutReviewInputObjectSchema).optional(),
  tags: z.lazy(() => ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectSchema).optional()
}).strict();
export const ReviewUncheckedCreateWithoutRatingInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateWithoutRatingInput>;
export const ReviewUncheckedCreateWithoutRatingInputObjectZodSchema = makeSchema();
