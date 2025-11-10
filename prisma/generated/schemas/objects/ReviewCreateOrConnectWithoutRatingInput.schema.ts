import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutRatingInputObjectSchema as ReviewCreateWithoutRatingInputObjectSchema } from './ReviewCreateWithoutRatingInput.schema';
import { ReviewUncheckedCreateWithoutRatingInputObjectSchema as ReviewUncheckedCreateWithoutRatingInputObjectSchema } from './ReviewUncheckedCreateWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutRatingInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutRatingInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutRatingInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutRatingInput>;
export const ReviewCreateOrConnectWithoutRatingInputObjectZodSchema = makeSchema();
