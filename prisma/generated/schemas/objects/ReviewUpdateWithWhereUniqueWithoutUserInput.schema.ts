import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutUserInputObjectSchema as ReviewUpdateWithoutUserInputObjectSchema } from './ReviewUpdateWithoutUserInput.schema';
import { ReviewUncheckedUpdateWithoutUserInputObjectSchema as ReviewUncheckedUpdateWithoutUserInputObjectSchema } from './ReviewUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ReviewUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutUserInput>;
export const ReviewUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
