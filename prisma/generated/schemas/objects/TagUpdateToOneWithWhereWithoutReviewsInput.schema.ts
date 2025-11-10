import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema';
import { TagUpdateWithoutReviewsInputObjectSchema as TagUpdateWithoutReviewsInputObjectSchema } from './TagUpdateWithoutReviewsInput.schema';
import { TagUncheckedUpdateWithoutReviewsInputObjectSchema as TagUncheckedUpdateWithoutReviewsInputObjectSchema } from './TagUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TagUpdateWithoutReviewsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutReviewsInputObjectSchema)])
}).strict();
export const TagUpdateToOneWithWhereWithoutReviewsInputObjectSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutReviewsInput>;
export const TagUpdateToOneWithWhereWithoutReviewsInputObjectZodSchema = makeSchema();
