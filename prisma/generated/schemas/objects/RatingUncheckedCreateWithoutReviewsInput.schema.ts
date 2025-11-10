import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema as RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './RatingTagUncheckedCreateNestedManyWithoutRatingInput.schema';
import { RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema as RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './RatingPictureUncheckedCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  userId: z.string(),
  value: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema).optional()
}).strict();
export const RatingUncheckedCreateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.RatingUncheckedCreateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUncheckedCreateWithoutReviewsInput>;
export const RatingUncheckedCreateWithoutReviewsInputObjectZodSchema = makeSchema();
