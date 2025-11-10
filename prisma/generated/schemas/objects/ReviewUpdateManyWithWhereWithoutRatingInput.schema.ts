import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema as ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutRatingInputObjectSchema as ReviewUncheckedUpdateManyWithoutRatingInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateManyWithoutRatingInputObjectSchema)])
}).strict();
export const ReviewUpdateManyWithWhereWithoutRatingInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutRatingInput>;
export const ReviewUpdateManyWithWhereWithoutRatingInputObjectZodSchema = makeSchema();
