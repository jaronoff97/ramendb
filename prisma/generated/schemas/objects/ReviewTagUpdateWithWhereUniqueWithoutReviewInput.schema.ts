import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './ReviewTagWhereUniqueInput.schema';
import { ReviewTagUpdateWithoutReviewInputObjectSchema as ReviewTagUpdateWithoutReviewInputObjectSchema } from './ReviewTagUpdateWithoutReviewInput.schema';
import { ReviewTagUncheckedUpdateWithoutReviewInputObjectSchema as ReviewTagUncheckedUpdateWithoutReviewInputObjectSchema } from './ReviewTagUncheckedUpdateWithoutReviewInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewTagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewTagUpdateWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagUncheckedUpdateWithoutReviewInputObjectSchema)])
}).strict();
export const ReviewTagUpdateWithWhereUniqueWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewTagUpdateWithWhereUniqueWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpdateWithWhereUniqueWithoutReviewInput>;
export const ReviewTagUpdateWithWhereUniqueWithoutReviewInputObjectZodSchema = makeSchema();
