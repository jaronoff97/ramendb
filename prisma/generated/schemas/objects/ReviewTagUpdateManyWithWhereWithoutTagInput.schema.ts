import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagScalarWhereInputObjectSchema as ReviewTagScalarWhereInputObjectSchema } from './ReviewTagScalarWhereInput.schema';
import { ReviewTagUpdateManyMutationInputObjectSchema as ReviewTagUpdateManyMutationInputObjectSchema } from './ReviewTagUpdateManyMutationInput.schema';
import { ReviewTagUncheckedUpdateManyWithoutTagInputObjectSchema as ReviewTagUncheckedUpdateManyWithoutTagInputObjectSchema } from './ReviewTagUncheckedUpdateManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewTagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewTagUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewTagUncheckedUpdateManyWithoutTagInputObjectSchema)])
}).strict();
export const ReviewTagUpdateManyWithWhereWithoutTagInputObjectSchema: z.ZodType<Prisma.ReviewTagUpdateManyWithWhereWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpdateManyWithWhereWithoutTagInput>;
export const ReviewTagUpdateManyWithWhereWithoutTagInputObjectZodSchema = makeSchema();
