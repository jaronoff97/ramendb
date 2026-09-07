import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateNestedOneWithoutRatingsInputObjectSchema as LocationCreateNestedOneWithoutRatingsInputObjectSchema } from './LocationCreateNestedOneWithoutRatingsInput.schema';
import { UserCreateNestedOneWithoutRatingsInputObjectSchema as UserCreateNestedOneWithoutRatingsInputObjectSchema } from './UserCreateNestedOneWithoutRatingsInput.schema';
import { ReviewCreateNestedManyWithoutRatingInputObjectSchema as ReviewCreateNestedManyWithoutRatingInputObjectSchema } from './ReviewCreateNestedManyWithoutRatingInput.schema';
import { RatingPictureCreateNestedManyWithoutRatingInputObjectSchema as RatingPictureCreateNestedManyWithoutRatingInputObjectSchema } from './RatingPictureCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  value: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutRatingsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutRatingsInputObjectSchema),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureCreateNestedManyWithoutRatingInputObjectSchema).optional()
}).strict();
export const RatingCreateWithoutTagsInputObjectSchema: z.ZodType<Prisma.RatingCreateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateWithoutTagsInput>;
export const RatingCreateWithoutTagsInputObjectZodSchema = makeSchema();
