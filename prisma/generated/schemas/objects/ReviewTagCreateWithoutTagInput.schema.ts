import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateNestedOneWithoutTagsInputObjectSchema as ReviewCreateNestedOneWithoutTagsInputObjectSchema } from './ReviewCreateNestedOneWithoutTagsInput.schema'

const makeSchema = () => z.object({
  review: z.lazy(() => ReviewCreateNestedOneWithoutTagsInputObjectSchema)
}).strict();
export const ReviewTagCreateWithoutTagInputObjectSchema: z.ZodType<Prisma.ReviewTagCreateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateWithoutTagInput>;
export const ReviewTagCreateWithoutTagInputObjectZodSchema = makeSchema();
