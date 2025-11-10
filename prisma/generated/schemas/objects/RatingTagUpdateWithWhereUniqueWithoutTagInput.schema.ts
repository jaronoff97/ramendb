import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './RatingTagWhereUniqueInput.schema';
import { RatingTagUpdateWithoutTagInputObjectSchema as RatingTagUpdateWithoutTagInputObjectSchema } from './RatingTagUpdateWithoutTagInput.schema';
import { RatingTagUncheckedUpdateWithoutTagInputObjectSchema as RatingTagUncheckedUpdateWithoutTagInputObjectSchema } from './RatingTagUncheckedUpdateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingTagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RatingTagUpdateWithoutTagInputObjectSchema), z.lazy(() => RatingTagUncheckedUpdateWithoutTagInputObjectSchema)])
}).strict();
export const RatingTagUpdateWithWhereUniqueWithoutTagInputObjectSchema: z.ZodType<Prisma.RatingTagUpdateWithWhereUniqueWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUpdateWithWhereUniqueWithoutTagInput>;
export const RatingTagUpdateWithWhereUniqueWithoutTagInputObjectZodSchema = makeSchema();
