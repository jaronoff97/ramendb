import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutUserInputObjectSchema as ReviewUpdateWithoutUserInputObjectSchema } from './ReviewUpdateWithoutUserInput.schema';
import { ReviewUncheckedUpdateWithoutUserInputObjectSchema as ReviewUncheckedUpdateWithoutUserInputObjectSchema } from './ReviewUncheckedUpdateWithoutUserInput.schema';
import { ReviewCreateWithoutUserInputObjectSchema as ReviewCreateWithoutUserInputObjectSchema } from './ReviewCreateWithoutUserInput.schema';
import { ReviewUncheckedCreateWithoutUserInputObjectSchema as ReviewUncheckedCreateWithoutUserInputObjectSchema } from './ReviewUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewUpdateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ReviewUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutUserInput>;
export const ReviewUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
