import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureUncheckedCreateNestedManyWithoutReviewInputObjectSchema as ReviewPictureUncheckedCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewPictureUncheckedCreateNestedManyWithoutReviewInput.schema';
import { ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectSchema as ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewTagUncheckedCreateNestedManyWithoutReviewInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  userId: z.string(),
  ratingId: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  pictures: z.lazy(() => ReviewPictureUncheckedCreateNestedManyWithoutReviewInputObjectSchema),
  tags: z.lazy(() => ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectSchema)
}).strict();
export const ReviewUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateInput>;
export const ReviewUncheckedCreateInputObjectZodSchema = makeSchema();
