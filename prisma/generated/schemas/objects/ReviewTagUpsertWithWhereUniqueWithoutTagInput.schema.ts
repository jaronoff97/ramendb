import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './ReviewTagWhereUniqueInput.schema';
import { ReviewTagUpdateWithoutTagInputObjectSchema as ReviewTagUpdateWithoutTagInputObjectSchema } from './ReviewTagUpdateWithoutTagInput.schema';
import { ReviewTagUncheckedUpdateWithoutTagInputObjectSchema as ReviewTagUncheckedUpdateWithoutTagInputObjectSchema } from './ReviewTagUncheckedUpdateWithoutTagInput.schema';
import { ReviewTagCreateWithoutTagInputObjectSchema as ReviewTagCreateWithoutTagInputObjectSchema } from './ReviewTagCreateWithoutTagInput.schema';
import { ReviewTagUncheckedCreateWithoutTagInputObjectSchema as ReviewTagUncheckedCreateWithoutTagInputObjectSchema } from './ReviewTagUncheckedCreateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewTagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewTagUpdateWithoutTagInputObjectSchema), z.lazy(() => ReviewTagUncheckedUpdateWithoutTagInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewTagCreateWithoutTagInputObjectSchema), z.lazy(() => ReviewTagUncheckedCreateWithoutTagInputObjectSchema)])
}).strict();
export const ReviewTagUpsertWithWhereUniqueWithoutTagInputObjectSchema: z.ZodType<Prisma.ReviewTagUpsertWithWhereUniqueWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpsertWithWhereUniqueWithoutTagInput>;
export const ReviewTagUpsertWithWhereUniqueWithoutTagInputObjectZodSchema = makeSchema();
