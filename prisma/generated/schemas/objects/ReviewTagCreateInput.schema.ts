import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateNestedOneWithoutTagsInputObjectSchema as ReviewCreateNestedOneWithoutTagsInputObjectSchema } from './ReviewCreateNestedOneWithoutTagsInput.schema';
import { TagCreateNestedOneWithoutReviewsInputObjectSchema as TagCreateNestedOneWithoutReviewsInputObjectSchema } from './TagCreateNestedOneWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  review: z.lazy(() => ReviewCreateNestedOneWithoutTagsInputObjectSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutReviewsInputObjectSchema)
}).strict();
export const ReviewTagCreateInputObjectSchema: z.ZodType<Prisma.ReviewTagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateInput>;
export const ReviewTagCreateInputObjectZodSchema = makeSchema();
