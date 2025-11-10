import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutRatingInput.schema';
import { RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema as RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './RatingTagUncheckedCreateNestedManyWithoutRatingInput.schema';
import { RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema as RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './RatingPictureUncheckedCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  userId: z.string(),
  value: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema),
  tags: z.lazy(() => RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema),
  ratingPictures: z.lazy(() => RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema)
}).strict();
export const RatingUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RatingUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUncheckedCreateInput>;
export const RatingUncheckedCreateInputObjectZodSchema = makeSchema();
