import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutRatingInputObjectSchema as ReviewUpdateWithoutRatingInputObjectSchema } from './ReviewUpdateWithoutRatingInput.schema';
import { ReviewUncheckedUpdateWithoutRatingInputObjectSchema as ReviewUncheckedUpdateWithoutRatingInputObjectSchema } from './ReviewUncheckedUpdateWithoutRatingInput.schema';
import { ReviewCreateWithoutRatingInputObjectSchema as ReviewCreateWithoutRatingInputObjectSchema } from './ReviewCreateWithoutRatingInput.schema';
import { ReviewUncheckedCreateWithoutRatingInputObjectSchema as ReviewUncheckedCreateWithoutRatingInputObjectSchema } from './ReviewUncheckedCreateWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewUpdateWithoutRatingInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutRatingInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutRatingInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutRatingInputObjectSchema)])
}).strict();
export const ReviewUpsertWithWhereUniqueWithoutRatingInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutRatingInput>;
export const ReviewUpsertWithWhereUniqueWithoutRatingInputObjectZodSchema = makeSchema();
