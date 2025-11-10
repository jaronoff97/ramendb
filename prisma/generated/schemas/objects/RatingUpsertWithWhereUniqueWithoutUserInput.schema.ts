import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingUpdateWithoutUserInputObjectSchema as RatingUpdateWithoutUserInputObjectSchema } from './RatingUpdateWithoutUserInput.schema';
import { RatingUncheckedUpdateWithoutUserInputObjectSchema as RatingUncheckedUpdateWithoutUserInputObjectSchema } from './RatingUncheckedUpdateWithoutUserInput.schema';
import { RatingCreateWithoutUserInputObjectSchema as RatingCreateWithoutUserInputObjectSchema } from './RatingCreateWithoutUserInput.schema';
import { RatingUncheckedCreateWithoutUserInputObjectSchema as RatingUncheckedCreateWithoutUserInputObjectSchema } from './RatingUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RatingUpdateWithoutUserInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => RatingCreateWithoutUserInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const RatingUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.RatingUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpsertWithWhereUniqueWithoutUserInput>;
export const RatingUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
