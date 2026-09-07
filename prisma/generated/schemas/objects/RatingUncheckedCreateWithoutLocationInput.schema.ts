import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutRatingInput.schema';
import { RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema as RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './RatingTagUncheckedCreateNestedManyWithoutRatingInput.schema';
import { RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema as RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './RatingPictureUncheckedCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  value: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  tags: z.lazy(() => RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema).optional()
}).strict();
export const RatingUncheckedCreateWithoutLocationInputObjectSchema: z.ZodType<Prisma.RatingUncheckedCreateWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUncheckedCreateWithoutLocationInput>;
export const RatingUncheckedCreateWithoutLocationInputObjectZodSchema = makeSchema();
