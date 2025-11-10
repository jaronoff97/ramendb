import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewUpdateWithoutTagsInputObjectSchema as ReviewUpdateWithoutTagsInputObjectSchema } from './ReviewUpdateWithoutTagsInput.schema';
import { ReviewUncheckedUpdateWithoutTagsInputObjectSchema as ReviewUncheckedUpdateWithoutTagsInputObjectSchema } from './ReviewUncheckedUpdateWithoutTagsInput.schema';
import { ReviewCreateWithoutTagsInputObjectSchema as ReviewCreateWithoutTagsInputObjectSchema } from './ReviewCreateWithoutTagsInput.schema';
import { ReviewUncheckedCreateWithoutTagsInputObjectSchema as ReviewUncheckedCreateWithoutTagsInputObjectSchema } from './ReviewUncheckedCreateWithoutTagsInput.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReviewUpdateWithoutTagsInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutTagsInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutTagsInputObjectSchema)]),
  where: z.lazy(() => ReviewWhereInputObjectSchema).optional()
}).strict();
export const ReviewUpsertWithoutTagsInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithoutTagsInput>;
export const ReviewUpsertWithoutTagsInputObjectZodSchema = makeSchema();
