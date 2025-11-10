import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema';
import { RatingUpdateWithoutReviewsInputObjectSchema as RatingUpdateWithoutReviewsInputObjectSchema } from './RatingUpdateWithoutReviewsInput.schema';
import { RatingUncheckedUpdateWithoutReviewsInputObjectSchema as RatingUncheckedUpdateWithoutReviewsInputObjectSchema } from './RatingUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RatingUpdateWithoutReviewsInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutReviewsInputObjectSchema)])
}).strict();
export const RatingUpdateToOneWithWhereWithoutReviewsInputObjectSchema: z.ZodType<Prisma.RatingUpdateToOneWithWhereWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateToOneWithWhereWithoutReviewsInput>;
export const RatingUpdateToOneWithWhereWithoutReviewsInputObjectZodSchema = makeSchema();
