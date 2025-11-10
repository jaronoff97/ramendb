import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagScalarWhereInputObjectSchema as RatingTagScalarWhereInputObjectSchema } from './RatingTagScalarWhereInput.schema';
import { RatingTagUpdateManyMutationInputObjectSchema as RatingTagUpdateManyMutationInputObjectSchema } from './RatingTagUpdateManyMutationInput.schema';
import { RatingTagUncheckedUpdateManyWithoutRatingInputObjectSchema as RatingTagUncheckedUpdateManyWithoutRatingInputObjectSchema } from './RatingTagUncheckedUpdateManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingTagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RatingTagUpdateManyMutationInputObjectSchema), z.lazy(() => RatingTagUncheckedUpdateManyWithoutRatingInputObjectSchema)])
}).strict();
export const RatingTagUpdateManyWithWhereWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingTagUpdateManyWithWhereWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUpdateManyWithWhereWithoutRatingInput>;
export const RatingTagUpdateManyWithWhereWithoutRatingInputObjectZodSchema = makeSchema();
