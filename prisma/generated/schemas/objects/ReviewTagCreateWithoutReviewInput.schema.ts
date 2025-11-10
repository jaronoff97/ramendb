import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateNestedOneWithoutReviewsInputObjectSchema as TagCreateNestedOneWithoutReviewsInputObjectSchema } from './TagCreateNestedOneWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutReviewsInputObjectSchema)
}).strict();
export const ReviewTagCreateWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewTagCreateWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateWithoutReviewInput>;
export const ReviewTagCreateWithoutReviewInputObjectZodSchema = makeSchema();
