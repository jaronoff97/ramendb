import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema';
import { RatingUpdateWithoutRatingPicturesInputObjectSchema as RatingUpdateWithoutRatingPicturesInputObjectSchema } from './RatingUpdateWithoutRatingPicturesInput.schema';
import { RatingUncheckedUpdateWithoutRatingPicturesInputObjectSchema as RatingUncheckedUpdateWithoutRatingPicturesInputObjectSchema } from './RatingUncheckedUpdateWithoutRatingPicturesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RatingUpdateWithoutRatingPicturesInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutRatingPicturesInputObjectSchema)])
}).strict();
export const RatingUpdateToOneWithWhereWithoutRatingPicturesInputObjectSchema: z.ZodType<Prisma.RatingUpdateToOneWithWhereWithoutRatingPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateToOneWithWhereWithoutRatingPicturesInput>;
export const RatingUpdateToOneWithWhereWithoutRatingPicturesInputObjectZodSchema = makeSchema();
