import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagScalarWhereInputObjectSchema as RatingTagScalarWhereInputObjectSchema } from './RatingTagScalarWhereInput.schema';
import { RatingTagUpdateManyMutationInputObjectSchema as RatingTagUpdateManyMutationInputObjectSchema } from './RatingTagUpdateManyMutationInput.schema';
import { RatingTagUncheckedUpdateManyWithoutTagInputObjectSchema as RatingTagUncheckedUpdateManyWithoutTagInputObjectSchema } from './RatingTagUncheckedUpdateManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingTagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RatingTagUpdateManyMutationInputObjectSchema), z.lazy(() => RatingTagUncheckedUpdateManyWithoutTagInputObjectSchema)])
}).strict();
export const RatingTagUpdateManyWithWhereWithoutTagInputObjectSchema: z.ZodType<Prisma.RatingTagUpdateManyWithWhereWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUpdateManyWithWhereWithoutTagInput>;
export const RatingTagUpdateManyWithWhereWithoutTagInputObjectZodSchema = makeSchema();
