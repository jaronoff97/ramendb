import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingUpdateWithoutRatingPicturesInputObjectSchema as RatingUpdateWithoutRatingPicturesInputObjectSchema } from './RatingUpdateWithoutRatingPicturesInput.schema';
import { RatingUncheckedUpdateWithoutRatingPicturesInputObjectSchema as RatingUncheckedUpdateWithoutRatingPicturesInputObjectSchema } from './RatingUncheckedUpdateWithoutRatingPicturesInput.schema';
import { RatingCreateWithoutRatingPicturesInputObjectSchema as RatingCreateWithoutRatingPicturesInputObjectSchema } from './RatingCreateWithoutRatingPicturesInput.schema';
import { RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema as RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema } from './RatingUncheckedCreateWithoutRatingPicturesInput.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RatingUpdateWithoutRatingPicturesInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutRatingPicturesInputObjectSchema)]),
  create: z.union([z.lazy(() => RatingCreateWithoutRatingPicturesInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema)]),
  where: z.lazy(() => RatingWhereInputObjectSchema).optional()
}).strict();
export const RatingUpsertWithoutRatingPicturesInputObjectSchema: z.ZodType<Prisma.RatingUpsertWithoutRatingPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpsertWithoutRatingPicturesInput>;
export const RatingUpsertWithoutRatingPicturesInputObjectZodSchema = makeSchema();
