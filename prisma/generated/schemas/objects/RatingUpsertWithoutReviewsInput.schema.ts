import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingUpdateWithoutReviewsInputObjectSchema as RatingUpdateWithoutReviewsInputObjectSchema } from './RatingUpdateWithoutReviewsInput.schema';
import { RatingUncheckedUpdateWithoutReviewsInputObjectSchema as RatingUncheckedUpdateWithoutReviewsInputObjectSchema } from './RatingUncheckedUpdateWithoutReviewsInput.schema';
import { RatingCreateWithoutReviewsInputObjectSchema as RatingCreateWithoutReviewsInputObjectSchema } from './RatingCreateWithoutReviewsInput.schema';
import { RatingUncheckedCreateWithoutReviewsInputObjectSchema as RatingUncheckedCreateWithoutReviewsInputObjectSchema } from './RatingUncheckedCreateWithoutReviewsInput.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RatingUpdateWithoutReviewsInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutReviewsInputObjectSchema)]),
  create: z.union([z.lazy(() => RatingCreateWithoutReviewsInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutReviewsInputObjectSchema)]),
  where: z.lazy(() => RatingWhereInputObjectSchema).optional()
}).strict();
export const RatingUpsertWithoutReviewsInputObjectSchema: z.ZodType<Prisma.RatingUpsertWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpsertWithoutReviewsInput>;
export const RatingUpsertWithoutReviewsInputObjectZodSchema = makeSchema();
