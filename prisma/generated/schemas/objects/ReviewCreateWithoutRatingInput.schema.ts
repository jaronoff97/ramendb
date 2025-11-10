import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateNestedOneWithoutReviewsInputObjectSchema as LocationCreateNestedOneWithoutReviewsInputObjectSchema } from './LocationCreateNestedOneWithoutReviewsInput.schema';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema as UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema';
import { ReviewPictureCreateNestedManyWithoutReviewInputObjectSchema as ReviewPictureCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewPictureCreateNestedManyWithoutReviewInput.schema';
import { ReviewTagCreateNestedManyWithoutReviewInputObjectSchema as ReviewTagCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewTagCreateNestedManyWithoutReviewInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutReviewsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema),
  pictures: z.lazy(() => ReviewPictureCreateNestedManyWithoutReviewInputObjectSchema).optional(),
  tags: z.lazy(() => ReviewTagCreateNestedManyWithoutReviewInputObjectSchema).optional()
}).strict();
export const ReviewCreateWithoutRatingInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutRatingInput>;
export const ReviewCreateWithoutRatingInputObjectZodSchema = makeSchema();
