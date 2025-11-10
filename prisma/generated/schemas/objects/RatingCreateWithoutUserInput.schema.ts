import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateNestedOneWithoutRatingsInputObjectSchema as LocationCreateNestedOneWithoutRatingsInputObjectSchema } from './LocationCreateNestedOneWithoutRatingsInput.schema';
import { ReviewCreateNestedManyWithoutRatingInputObjectSchema as ReviewCreateNestedManyWithoutRatingInputObjectSchema } from './ReviewCreateNestedManyWithoutRatingInput.schema';
import { RatingTagCreateNestedManyWithoutRatingInputObjectSchema as RatingTagCreateNestedManyWithoutRatingInputObjectSchema } from './RatingTagCreateNestedManyWithoutRatingInput.schema';
import { RatingPictureCreateNestedManyWithoutRatingInputObjectSchema as RatingPictureCreateNestedManyWithoutRatingInputObjectSchema } from './RatingPictureCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  value: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutRatingsInputObjectSchema),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  tags: z.lazy(() => RatingTagCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureCreateNestedManyWithoutRatingInputObjectSchema).optional()
}).strict();
export const RatingCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.RatingCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateWithoutUserInput>;
export const RatingCreateWithoutUserInputObjectZodSchema = makeSchema();
