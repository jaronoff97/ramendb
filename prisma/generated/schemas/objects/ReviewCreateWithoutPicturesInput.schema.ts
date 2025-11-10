import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateNestedOneWithoutReviewsInputObjectSchema as LocationCreateNestedOneWithoutReviewsInputObjectSchema } from './LocationCreateNestedOneWithoutReviewsInput.schema';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema as UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema';
import { RatingCreateNestedOneWithoutReviewsInputObjectSchema as RatingCreateNestedOneWithoutReviewsInputObjectSchema } from './RatingCreateNestedOneWithoutReviewsInput.schema';
import { ReviewTagCreateNestedManyWithoutReviewInputObjectSchema as ReviewTagCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewTagCreateNestedManyWithoutReviewInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutReviewsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema),
  rating: z.lazy(() => RatingCreateNestedOneWithoutReviewsInputObjectSchema).optional(),
  tags: z.lazy(() => ReviewTagCreateNestedManyWithoutReviewInputObjectSchema).optional()
}).strict();
export const ReviewCreateWithoutPicturesInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutPicturesInput>;
export const ReviewCreateWithoutPicturesInputObjectZodSchema = makeSchema();
