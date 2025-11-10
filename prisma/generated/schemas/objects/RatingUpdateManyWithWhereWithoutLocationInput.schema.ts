import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingScalarWhereInputObjectSchema as RatingScalarWhereInputObjectSchema } from './RatingScalarWhereInput.schema';
import { RatingUpdateManyMutationInputObjectSchema as RatingUpdateManyMutationInputObjectSchema } from './RatingUpdateManyMutationInput.schema';
import { RatingUncheckedUpdateManyWithoutLocationInputObjectSchema as RatingUncheckedUpdateManyWithoutLocationInputObjectSchema } from './RatingUncheckedUpdateManyWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RatingUpdateManyMutationInputObjectSchema), z.lazy(() => RatingUncheckedUpdateManyWithoutLocationInputObjectSchema)])
}).strict();
export const RatingUpdateManyWithWhereWithoutLocationInputObjectSchema: z.ZodType<Prisma.RatingUpdateManyWithWhereWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateManyWithWhereWithoutLocationInput>;
export const RatingUpdateManyWithWhereWithoutLocationInputObjectZodSchema = makeSchema();
