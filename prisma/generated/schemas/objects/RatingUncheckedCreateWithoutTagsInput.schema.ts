import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutRatingInput.schema';
import { RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema as RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './RatingPictureUncheckedCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  userId: z.string(),
  value: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  ratingPictures: z.lazy(() => RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema).optional()
}).strict();
export const RatingUncheckedCreateWithoutTagsInputObjectSchema: z.ZodType<Prisma.RatingUncheckedCreateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUncheckedCreateWithoutTagsInput>;
export const RatingUncheckedCreateWithoutTagsInputObjectZodSchema = makeSchema();
