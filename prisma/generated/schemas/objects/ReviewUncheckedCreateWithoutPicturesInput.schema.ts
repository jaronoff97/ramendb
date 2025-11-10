import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectSchema as ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewTagUncheckedCreateNestedManyWithoutReviewInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  userId: z.string(),
  ratingId: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => ReviewTagUncheckedCreateNestedManyWithoutReviewInputObjectSchema).optional()
}).strict();
export const ReviewUncheckedCreateWithoutPicturesInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateWithoutPicturesInput>;
export const ReviewUncheckedCreateWithoutPicturesInputObjectZodSchema = makeSchema();
