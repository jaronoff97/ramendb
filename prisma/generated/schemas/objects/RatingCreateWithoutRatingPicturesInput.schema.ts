import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateNestedOneWithoutRatingsInputObjectSchema as LocationCreateNestedOneWithoutRatingsInputObjectSchema } from './LocationCreateNestedOneWithoutRatingsInput.schema';
import { UserCreateNestedOneWithoutRatingsInputObjectSchema as UserCreateNestedOneWithoutRatingsInputObjectSchema } from './UserCreateNestedOneWithoutRatingsInput.schema';
import { ReviewCreateNestedManyWithoutRatingInputObjectSchema as ReviewCreateNestedManyWithoutRatingInputObjectSchema } from './ReviewCreateNestedManyWithoutRatingInput.schema';
import { RatingTagCreateNestedManyWithoutRatingInputObjectSchema as RatingTagCreateNestedManyWithoutRatingInputObjectSchema } from './RatingTagCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  value: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutRatingsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutRatingsInputObjectSchema),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  tags: z.lazy(() => RatingTagCreateNestedManyWithoutRatingInputObjectSchema).optional()
}).strict();
export const RatingCreateWithoutRatingPicturesInputObjectSchema: z.ZodType<Prisma.RatingCreateWithoutRatingPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateWithoutRatingPicturesInput>;
export const RatingCreateWithoutRatingPicturesInputObjectZodSchema = makeSchema();
