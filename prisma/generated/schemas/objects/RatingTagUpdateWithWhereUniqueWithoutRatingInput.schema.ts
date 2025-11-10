import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './RatingTagWhereUniqueInput.schema';
import { RatingTagUpdateWithoutRatingInputObjectSchema as RatingTagUpdateWithoutRatingInputObjectSchema } from './RatingTagUpdateWithoutRatingInput.schema';
import { RatingTagUncheckedUpdateWithoutRatingInputObjectSchema as RatingTagUncheckedUpdateWithoutRatingInputObjectSchema } from './RatingTagUncheckedUpdateWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingTagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RatingTagUpdateWithoutRatingInputObjectSchema), z.lazy(() => RatingTagUncheckedUpdateWithoutRatingInputObjectSchema)])
}).strict();
export const RatingTagUpdateWithWhereUniqueWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingTagUpdateWithWhereUniqueWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUpdateWithWhereUniqueWithoutRatingInput>;
export const RatingTagUpdateWithWhereUniqueWithoutRatingInputObjectZodSchema = makeSchema();
