import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutRatingInputObjectSchema as ReviewCreateWithoutRatingInputObjectSchema } from './ReviewCreateWithoutRatingInput.schema';
import { ReviewUncheckedCreateWithoutRatingInputObjectSchema as ReviewUncheckedCreateWithoutRatingInputObjectSchema } from './ReviewUncheckedCreateWithoutRatingInput.schema';
import { ReviewCreateOrConnectWithoutRatingInputObjectSchema as ReviewCreateOrConnectWithoutRatingInputObjectSchema } from './ReviewCreateOrConnectWithoutRatingInput.schema';
import { ReviewCreateManyRatingInputEnvelopeObjectSchema as ReviewCreateManyRatingInputEnvelopeObjectSchema } from './ReviewCreateManyRatingInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutRatingInputObjectSchema), z.lazy(() => ReviewCreateWithoutRatingInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutRatingInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutRatingInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutRatingInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutRatingInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyRatingInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUncheckedCreateNestedManyWithoutRatingInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutRatingInput>;
export const ReviewUncheckedCreateNestedManyWithoutRatingInputObjectZodSchema = makeSchema();
