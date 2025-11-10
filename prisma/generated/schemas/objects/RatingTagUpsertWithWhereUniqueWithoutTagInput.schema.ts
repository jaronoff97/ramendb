import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './RatingTagWhereUniqueInput.schema';
import { RatingTagUpdateWithoutTagInputObjectSchema as RatingTagUpdateWithoutTagInputObjectSchema } from './RatingTagUpdateWithoutTagInput.schema';
import { RatingTagUncheckedUpdateWithoutTagInputObjectSchema as RatingTagUncheckedUpdateWithoutTagInputObjectSchema } from './RatingTagUncheckedUpdateWithoutTagInput.schema';
import { RatingTagCreateWithoutTagInputObjectSchema as RatingTagCreateWithoutTagInputObjectSchema } from './RatingTagCreateWithoutTagInput.schema';
import { RatingTagUncheckedCreateWithoutTagInputObjectSchema as RatingTagUncheckedCreateWithoutTagInputObjectSchema } from './RatingTagUncheckedCreateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingTagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RatingTagUpdateWithoutTagInputObjectSchema), z.lazy(() => RatingTagUncheckedUpdateWithoutTagInputObjectSchema)]),
  create: z.union([z.lazy(() => RatingTagCreateWithoutTagInputObjectSchema), z.lazy(() => RatingTagUncheckedCreateWithoutTagInputObjectSchema)])
}).strict();
export const RatingTagUpsertWithWhereUniqueWithoutTagInputObjectSchema: z.ZodType<Prisma.RatingTagUpsertWithWhereUniqueWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUpsertWithWhereUniqueWithoutTagInput>;
export const RatingTagUpsertWithWhereUniqueWithoutTagInputObjectZodSchema = makeSchema();
