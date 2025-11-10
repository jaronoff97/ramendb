import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './ReviewTagWhereUniqueInput.schema';
import { ReviewTagUpdateWithoutTagInputObjectSchema as ReviewTagUpdateWithoutTagInputObjectSchema } from './ReviewTagUpdateWithoutTagInput.schema';
import { ReviewTagUncheckedUpdateWithoutTagInputObjectSchema as ReviewTagUncheckedUpdateWithoutTagInputObjectSchema } from './ReviewTagUncheckedUpdateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewTagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewTagUpdateWithoutTagInputObjectSchema), z.lazy(() => ReviewTagUncheckedUpdateWithoutTagInputObjectSchema)])
}).strict();
export const ReviewTagUpdateWithWhereUniqueWithoutTagInputObjectSchema: z.ZodType<Prisma.ReviewTagUpdateWithWhereUniqueWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpdateWithWhereUniqueWithoutTagInput>;
export const ReviewTagUpdateWithWhereUniqueWithoutTagInputObjectZodSchema = makeSchema();
