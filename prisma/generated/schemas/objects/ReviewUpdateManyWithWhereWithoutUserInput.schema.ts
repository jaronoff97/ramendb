import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema as ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutUserInputObjectSchema as ReviewUncheckedUpdateManyWithoutUserInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ReviewUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutUserInput>;
export const ReviewUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
