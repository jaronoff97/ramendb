import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingUpdateWithoutUserInputObjectSchema as RatingUpdateWithoutUserInputObjectSchema } from './RatingUpdateWithoutUserInput.schema';
import { RatingUncheckedUpdateWithoutUserInputObjectSchema as RatingUncheckedUpdateWithoutUserInputObjectSchema } from './RatingUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RatingUpdateWithoutUserInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const RatingUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.RatingUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateWithWhereUniqueWithoutUserInput>;
export const RatingUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
