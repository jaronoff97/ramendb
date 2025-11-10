import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutRatingsInputObjectSchema as UserCreateNestedOneWithoutRatingsInputObjectSchema } from './UserCreateNestedOneWithoutRatingsInput.schema';
import { ReviewCreateNestedManyWithoutRatingInputObjectSchema as ReviewCreateNestedManyWithoutRatingInputObjectSchema } from './ReviewCreateNestedManyWithoutRatingInput.schema';
import { RatingTagCreateNestedManyWithoutRatingInputObjectSchema as RatingTagCreateNestedManyWithoutRatingInputObjectSchema } from './RatingTagCreateNestedManyWithoutRatingInput.schema';
import { RatingPictureCreateNestedManyWithoutRatingInputObjectSchema as RatingPictureCreateNestedManyWithoutRatingInputObjectSchema } from './RatingPictureCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  value: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRatingsInputObjectSchema),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  tags: z.lazy(() => RatingTagCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureCreateNestedManyWithoutRatingInputObjectSchema).optional()
}).strict();
export const RatingCreateWithoutLocationInputObjectSchema: z.ZodType<Prisma.RatingCreateWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateWithoutLocationInput>;
export const RatingCreateWithoutLocationInputObjectZodSchema = makeSchema();
