import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingCreateWithoutReviewsInputObjectSchema as RatingCreateWithoutReviewsInputObjectSchema } from './RatingCreateWithoutReviewsInput.schema';
import { RatingUncheckedCreateWithoutReviewsInputObjectSchema as RatingUncheckedCreateWithoutReviewsInputObjectSchema } from './RatingUncheckedCreateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RatingCreateWithoutReviewsInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutReviewsInputObjectSchema)])
}).strict();
export const RatingCreateOrConnectWithoutReviewsInputObjectSchema: z.ZodType<Prisma.RatingCreateOrConnectWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateOrConnectWithoutReviewsInput>;
export const RatingCreateOrConnectWithoutReviewsInputObjectZodSchema = makeSchema();
