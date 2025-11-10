import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateNestedOneWithoutRatingsInputObjectSchema as LocationCreateNestedOneWithoutRatingsInputObjectSchema } from './LocationCreateNestedOneWithoutRatingsInput.schema';
import { UserCreateNestedOneWithoutRatingsInputObjectSchema as UserCreateNestedOneWithoutRatingsInputObjectSchema } from './UserCreateNestedOneWithoutRatingsInput.schema';
import { ReviewCreateNestedManyWithoutRatingInputObjectSchema as ReviewCreateNestedManyWithoutRatingInputObjectSchema } from './ReviewCreateNestedManyWithoutRatingInput.schema';
import { RatingTagCreateNestedManyWithoutRatingInputObjectSchema as RatingTagCreateNestedManyWithoutRatingInputObjectSchema } from './RatingTagCreateNestedManyWithoutRatingInput.schema';
import { RatingPictureCreateNestedManyWithoutRatingInputObjectSchema as RatingPictureCreateNestedManyWithoutRatingInputObjectSchema } from './RatingPictureCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  value: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutRatingsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutRatingsInputObjectSchema),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutRatingInputObjectSchema),
  tags: z.lazy(() => RatingTagCreateNestedManyWithoutRatingInputObjectSchema),
  ratingPictures: z.lazy(() => RatingPictureCreateNestedManyWithoutRatingInputObjectSchema)
}).strict();
export const RatingCreateInputObjectSchema: z.ZodType<Prisma.RatingCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateInput>;
export const RatingCreateInputObjectZodSchema = makeSchema();
