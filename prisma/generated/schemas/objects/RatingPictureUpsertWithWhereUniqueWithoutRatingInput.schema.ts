import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './RatingPictureWhereUniqueInput.schema';
import { RatingPictureUpdateWithoutRatingInputObjectSchema as RatingPictureUpdateWithoutRatingInputObjectSchema } from './RatingPictureUpdateWithoutRatingInput.schema';
import { RatingPictureUncheckedUpdateWithoutRatingInputObjectSchema as RatingPictureUncheckedUpdateWithoutRatingInputObjectSchema } from './RatingPictureUncheckedUpdateWithoutRatingInput.schema';
import { RatingPictureCreateWithoutRatingInputObjectSchema as RatingPictureCreateWithoutRatingInputObjectSchema } from './RatingPictureCreateWithoutRatingInput.schema';
import { RatingPictureUncheckedCreateWithoutRatingInputObjectSchema as RatingPictureUncheckedCreateWithoutRatingInputObjectSchema } from './RatingPictureUncheckedCreateWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingPictureWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RatingPictureUpdateWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureUncheckedUpdateWithoutRatingInputObjectSchema)]),
  create: z.union([z.lazy(() => RatingPictureCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureUncheckedCreateWithoutRatingInputObjectSchema)])
}).strict();
export const RatingPictureUpsertWithWhereUniqueWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingPictureUpsertWithWhereUniqueWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureUpsertWithWhereUniqueWithoutRatingInput>;
export const RatingPictureUpsertWithWhereUniqueWithoutRatingInputObjectZodSchema = makeSchema();
