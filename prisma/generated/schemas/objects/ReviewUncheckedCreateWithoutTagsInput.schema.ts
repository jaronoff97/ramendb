import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureUncheckedCreateNestedManyWithoutReviewInputObjectSchema as ReviewPictureUncheckedCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewPictureUncheckedCreateNestedManyWithoutReviewInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  userId: z.string(),
  ratingId: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pictures: z.lazy(() => ReviewPictureUncheckedCreateNestedManyWithoutReviewInputObjectSchema).optional()
}).strict();
export const ReviewUncheckedCreateWithoutTagsInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateWithoutTagsInput>;
export const ReviewUncheckedCreateWithoutTagsInputObjectZodSchema = makeSchema();
