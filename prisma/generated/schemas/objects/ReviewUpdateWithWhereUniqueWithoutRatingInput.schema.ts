import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutRatingInputObjectSchema as ReviewUpdateWithoutRatingInputObjectSchema } from './ReviewUpdateWithoutRatingInput.schema';
import { ReviewUncheckedUpdateWithoutRatingInputObjectSchema as ReviewUncheckedUpdateWithoutRatingInputObjectSchema } from './ReviewUncheckedUpdateWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateWithoutRatingInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutRatingInputObjectSchema)])
}).strict();
export const ReviewUpdateWithWhereUniqueWithoutRatingInputObjectSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutRatingInput>;
export const ReviewUpdateWithWhereUniqueWithoutRatingInputObjectZodSchema = makeSchema();
