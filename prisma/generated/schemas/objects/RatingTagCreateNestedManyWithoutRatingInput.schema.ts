import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagCreateWithoutRatingInputObjectSchema as RatingTagCreateWithoutRatingInputObjectSchema } from './RatingTagCreateWithoutRatingInput.schema';
import { RatingTagUncheckedCreateWithoutRatingInputObjectSchema as RatingTagUncheckedCreateWithoutRatingInputObjectSchema } from './RatingTagUncheckedCreateWithoutRatingInput.schema';
import { RatingTagCreateOrConnectWithoutRatingInputObjectSchema as RatingTagCreateOrConnectWithoutRatingInputObjectSchema } from './RatingTagCreateOrConnectWithoutRatingInput.schema';
import { RatingTagCreateManyRatingInputEnvelopeObjectSchema as RatingTagCreateManyRatingInputEnvelopeObjectSchema } from './RatingTagCreateManyRatingInputEnvelope.schema';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './RatingTagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingTagCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingTagCreateWithoutRatingInputObjectSchema).array(), z.lazy(() => RatingTagUncheckedCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingTagUncheckedCreateWithoutRatingInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RatingTagCreateOrConnectWithoutRatingInputObjectSchema), z.lazy(() => RatingTagCreateOrConnectWithoutRatingInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RatingTagCreateManyRatingInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RatingTagWhereUniqueInputObjectSchema), z.lazy(() => RatingTagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RatingTagCreateNestedManyWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingTagCreateNestedManyWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateNestedManyWithoutRatingInput>;
export const RatingTagCreateNestedManyWithoutRatingInputObjectZodSchema = makeSchema();
