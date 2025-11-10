import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagScalarWhereInputObjectSchema as ReviewTagScalarWhereInputObjectSchema } from './ReviewTagScalarWhereInput.schema';
import { ReviewTagUpdateManyMutationInputObjectSchema as ReviewTagUpdateManyMutationInputObjectSchema } from './ReviewTagUpdateManyMutationInput.schema';
import { ReviewTagUncheckedUpdateManyWithoutReviewInputObjectSchema as ReviewTagUncheckedUpdateManyWithoutReviewInputObjectSchema } from './ReviewTagUncheckedUpdateManyWithoutReviewInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewTagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewTagUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewTagUncheckedUpdateManyWithoutReviewInputObjectSchema)])
}).strict();
export const ReviewTagUpdateManyWithWhereWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewTagUpdateManyWithWhereWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpdateManyWithWhereWithoutReviewInput>;
export const ReviewTagUpdateManyWithWhereWithoutReviewInputObjectZodSchema = makeSchema();
