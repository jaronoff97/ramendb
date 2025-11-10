import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './ReviewTagWhereUniqueInput.schema';
import { ReviewTagUpdateWithoutReviewInputObjectSchema as ReviewTagUpdateWithoutReviewInputObjectSchema } from './ReviewTagUpdateWithoutReviewInput.schema';
import { ReviewTagUncheckedUpdateWithoutReviewInputObjectSchema as ReviewTagUncheckedUpdateWithoutReviewInputObjectSchema } from './ReviewTagUncheckedUpdateWithoutReviewInput.schema';
import { ReviewTagCreateWithoutReviewInputObjectSchema as ReviewTagCreateWithoutReviewInputObjectSchema } from './ReviewTagCreateWithoutReviewInput.schema';
import { ReviewTagUncheckedCreateWithoutReviewInputObjectSchema as ReviewTagUncheckedCreateWithoutReviewInputObjectSchema } from './ReviewTagUncheckedCreateWithoutReviewInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewTagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewTagUpdateWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagUncheckedUpdateWithoutReviewInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewTagCreateWithoutReviewInputObjectSchema), z.lazy(() => ReviewTagUncheckedCreateWithoutReviewInputObjectSchema)])
}).strict();
export const ReviewTagUpsertWithWhereUniqueWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewTagUpsertWithWhereUniqueWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpsertWithWhereUniqueWithoutReviewInput>;
export const ReviewTagUpsertWithWhereUniqueWithoutReviewInputObjectZodSchema = makeSchema();
