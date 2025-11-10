import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagUpdateWithoutReviewsInputObjectSchema as TagUpdateWithoutReviewsInputObjectSchema } from './TagUpdateWithoutReviewsInput.schema';
import { TagUncheckedUpdateWithoutReviewsInputObjectSchema as TagUncheckedUpdateWithoutReviewsInputObjectSchema } from './TagUncheckedUpdateWithoutReviewsInput.schema';
import { TagCreateWithoutReviewsInputObjectSchema as TagCreateWithoutReviewsInputObjectSchema } from './TagCreateWithoutReviewsInput.schema';
import { TagUncheckedCreateWithoutReviewsInputObjectSchema as TagUncheckedCreateWithoutReviewsInputObjectSchema } from './TagUncheckedCreateWithoutReviewsInput.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TagUpdateWithoutReviewsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutReviewsInputObjectSchema)]),
  create: z.union([z.lazy(() => TagCreateWithoutReviewsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutReviewsInputObjectSchema)]),
  where: z.lazy(() => TagWhereInputObjectSchema).optional()
}).strict();
export const TagUpsertWithoutReviewsInputObjectSchema: z.ZodType<Prisma.TagUpsertWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpsertWithoutReviewsInput>;
export const TagUpsertWithoutReviewsInputObjectZodSchema = makeSchema();
