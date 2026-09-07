import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateNestedOneWithoutRatingsInputObjectSchema as LocationCreateNestedOneWithoutRatingsInputObjectSchema } from './LocationCreateNestedOneWithoutRatingsInput.schema';
import { UserCreateNestedOneWithoutRatingsInputObjectSchema as UserCreateNestedOneWithoutRatingsInputObjectSchema } from './UserCreateNestedOneWithoutRatingsInput.schema';
import { RatingTagCreateNestedManyWithoutRatingInputObjectSchema as RatingTagCreateNestedManyWithoutRatingInputObjectSchema } from './RatingTagCreateNestedManyWithoutRatingInput.schema';
import { RatingPictureCreateNestedManyWithoutRatingInputObjectSchema as RatingPictureCreateNestedManyWithoutRatingInputObjectSchema } from './RatingPictureCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  value: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutRatingsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutRatingsInputObjectSchema),
  tags: z.lazy(() => RatingTagCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureCreateNestedManyWithoutRatingInputObjectSchema).optional()
}).strict();
export const RatingCreateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.RatingCreateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateWithoutReviewsInput>;
export const RatingCreateWithoutReviewsInputObjectZodSchema = makeSchema();
