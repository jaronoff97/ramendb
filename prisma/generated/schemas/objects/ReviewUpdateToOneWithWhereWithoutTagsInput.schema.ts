import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema';
import { ReviewUpdateWithoutTagsInputObjectSchema as ReviewUpdateWithoutTagsInputObjectSchema } from './ReviewUpdateWithoutTagsInput.schema';
import { ReviewUncheckedUpdateWithoutTagsInputObjectSchema as ReviewUncheckedUpdateWithoutTagsInputObjectSchema } from './ReviewUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReviewUpdateWithoutTagsInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const ReviewUpdateToOneWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.ReviewUpdateToOneWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateToOneWithWhereWithoutTagsInput>;
export const ReviewUpdateToOneWithWhereWithoutTagsInputObjectZodSchema = makeSchema();
