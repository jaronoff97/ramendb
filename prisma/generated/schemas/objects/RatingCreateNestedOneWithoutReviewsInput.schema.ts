import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateWithoutReviewsInputObjectSchema as RatingCreateWithoutReviewsInputObjectSchema } from './RatingCreateWithoutReviewsInput.schema';
import { RatingUncheckedCreateWithoutReviewsInputObjectSchema as RatingUncheckedCreateWithoutReviewsInputObjectSchema } from './RatingUncheckedCreateWithoutReviewsInput.schema';
import { RatingCreateOrConnectWithoutReviewsInputObjectSchema as RatingCreateOrConnectWithoutReviewsInputObjectSchema } from './RatingCreateOrConnectWithoutReviewsInput.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingCreateWithoutReviewsInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RatingCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => RatingWhereUniqueInputObjectSchema).optional()
}).strict();
export const RatingCreateNestedOneWithoutReviewsInputObjectSchema: z.ZodType<Prisma.RatingCreateNestedOneWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateNestedOneWithoutReviewsInput>;
export const RatingCreateNestedOneWithoutReviewsInputObjectZodSchema = makeSchema();
