import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './RatingPictureWhereUniqueInput.schema';
import { RatingPictureUpdateWithoutRatingInputObjectSchema as RatingPictureUpdateWithoutRatingInputObjectSchema } from './RatingPictureUpdateWithoutRatingInput.schema';
import { RatingPictureUncheckedUpdateWithoutRatingInputObjectSchema as RatingPictureUncheckedUpdateWithoutRatingInputObjectSchema } from './RatingPictureUncheckedUpdateWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingPictureWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RatingPictureUpdateWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureUncheckedUpdateWithoutRatingInputObjectSchema)])
}).strict();
export const RatingPictureUpdateWithWhereUniqueWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingPictureUpdateWithWhereUniqueWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureUpdateWithWhereUniqueWithoutRatingInput>;
export const RatingPictureUpdateWithWhereUniqueWithoutRatingInputObjectZodSchema = makeSchema();
