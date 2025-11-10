import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './RatingTagWhereUniqueInput.schema';
import { RatingTagCreateWithoutRatingInputObjectSchema as RatingTagCreateWithoutRatingInputObjectSchema } from './RatingTagCreateWithoutRatingInput.schema';
import { RatingTagUncheckedCreateWithoutRatingInputObjectSchema as RatingTagUncheckedCreateWithoutRatingInputObjectSchema } from './RatingTagUncheckedCreateWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingTagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RatingTagCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingTagUncheckedCreateWithoutRatingInputObjectSchema)])
}).strict();
export const RatingTagCreateOrConnectWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingTagCreateOrConnectWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateOrConnectWithoutRatingInput>;
export const RatingTagCreateOrConnectWithoutRatingInputObjectZodSchema = makeSchema();
