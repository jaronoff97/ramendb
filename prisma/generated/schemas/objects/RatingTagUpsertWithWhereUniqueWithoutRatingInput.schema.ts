import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './RatingTagWhereUniqueInput.schema';
import { RatingTagUpdateWithoutRatingInputObjectSchema as RatingTagUpdateWithoutRatingInputObjectSchema } from './RatingTagUpdateWithoutRatingInput.schema';
import { RatingTagUncheckedUpdateWithoutRatingInputObjectSchema as RatingTagUncheckedUpdateWithoutRatingInputObjectSchema } from './RatingTagUncheckedUpdateWithoutRatingInput.schema';
import { RatingTagCreateWithoutRatingInputObjectSchema as RatingTagCreateWithoutRatingInputObjectSchema } from './RatingTagCreateWithoutRatingInput.schema';
import { RatingTagUncheckedCreateWithoutRatingInputObjectSchema as RatingTagUncheckedCreateWithoutRatingInputObjectSchema } from './RatingTagUncheckedCreateWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingTagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RatingTagUpdateWithoutRatingInputObjectSchema), z.lazy(() => RatingTagUncheckedUpdateWithoutRatingInputObjectSchema)]),
  create: z.union([z.lazy(() => RatingTagCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingTagUncheckedCreateWithoutRatingInputObjectSchema)])
}).strict();
export const RatingTagUpsertWithWhereUniqueWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingTagUpsertWithWhereUniqueWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUpsertWithWhereUniqueWithoutRatingInput>;
export const RatingTagUpsertWithWhereUniqueWithoutRatingInputObjectZodSchema = makeSchema();
