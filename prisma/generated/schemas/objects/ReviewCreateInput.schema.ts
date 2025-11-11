import * as z from 'zod';
import { LocationCreateNestedOneWithoutReviewsInputObjectSchema as LocationCreateNestedOneWithoutReviewsInputObjectSchema } from './LocationCreateNestedOneWithoutReviewsInput.schema';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema as UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema';
import { RatingCreateNestedOneWithoutReviewsInputObjectSchema as RatingCreateNestedOneWithoutReviewsInputObjectSchema } from './RatingCreateNestedOneWithoutReviewsInput.schema';
import { ReviewPictureCreateNestedManyWithoutReviewInputObjectSchema as ReviewPictureCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewPictureCreateNestedManyWithoutReviewInput.schema';
import { ReviewTagCreateNestedManyWithoutReviewInputObjectSchema as ReviewTagCreateNestedManyWithoutReviewInputObjectSchema } from './ReviewTagCreateNestedManyWithoutReviewInput.schema'
import type { Prisma } from '@prisma/client';

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutReviewsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema),
  rating: z.lazy(() => RatingCreateNestedOneWithoutReviewsInputObjectSchema).optional(),
  pictures: z.lazy(() => ReviewPictureCreateNestedManyWithoutReviewInputObjectSchema),
  tags: z.lazy(() => ReviewTagCreateNestedManyWithoutReviewInputObjectSchema)
}).strict();
export const ReviewCreateInputObjectSchema: z.ZodType<Prisma.ReviewCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateInput>;
export const ReviewCreateInputObjectZodSchema = makeSchema();
