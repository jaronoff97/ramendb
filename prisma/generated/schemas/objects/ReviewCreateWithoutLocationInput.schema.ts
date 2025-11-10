import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema as UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema';
import { RatingCreateNestedOneWithoutReviewsInputObjectSchema as RatingCreateNestedOneWithoutReviewsInputObjectSchema } from './RatingCreateNestedOneWithoutReviewsInput.schema';
import { ReviewPictureCreateNestedManyWithoutReviewInputObjectSchema as ReviewPictureCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewPictureCreateNestedManyWithoutReviewInput.schema';
import { ReviewTagCreateNestedManyWithoutReviewInputObjectSchema as ReviewTagCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewTagCreateNestedManyWithoutReviewInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema),
  rating: z.lazy(() => RatingCreateNestedOneWithoutReviewsInputObjectSchema).optional(),
  pictures: z.lazy(() => ReviewPictureCreateNestedManyWithoutReviewInputObjectSchema).optional(),
  tags: z.lazy(() => ReviewTagCreateNestedManyWithoutReviewInputObjectSchema).optional()
}).strict();
export const ReviewCreateWithoutLocationInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutLocationInput>;
export const ReviewCreateWithoutLocationInputObjectZodSchema = makeSchema();
