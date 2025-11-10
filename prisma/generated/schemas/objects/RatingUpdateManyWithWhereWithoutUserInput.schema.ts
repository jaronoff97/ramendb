import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingScalarWhereInputObjectSchema as RatingScalarWhereInputObjectSchema } from './RatingScalarWhereInput.schema';
import { RatingUpdateManyMutationInputObjectSchema as RatingUpdateManyMutationInputObjectSchema } from './RatingUpdateManyMutationInput.schema';
import { RatingUncheckedUpdateManyWithoutUserInputObjectSchema as RatingUncheckedUpdateManyWithoutUserInputObjectSchema } from './RatingUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RatingUpdateManyMutationInputObjectSchema), z.lazy(() => RatingUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const RatingUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.RatingUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateManyWithWhereWithoutUserInput>;
export const RatingUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
