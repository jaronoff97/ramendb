import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutRatingInput.schema';
import { RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema as RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema } from './RatingTagUncheckedCreateNestedManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  userId: z.string(),
  value: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema).optional(),
  tags: z.lazy(() => RatingTagUncheckedCreateNestedManyWithoutRatingInputObjectSchema).optional()
}).strict();
export const RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema: z.ZodType<Prisma.RatingUncheckedCreateWithoutRatingPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUncheckedCreateWithoutRatingPicturesInput>;
export const RatingUncheckedCreateWithoutRatingPicturesInputObjectZodSchema = makeSchema();
