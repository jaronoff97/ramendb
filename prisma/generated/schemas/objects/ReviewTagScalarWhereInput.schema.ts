import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const reviewtagscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewTagScalarWhereInputObjectSchema), z.lazy(() => ReviewTagScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewTagScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewTagScalarWhereInputObjectSchema), z.lazy(() => ReviewTagScalarWhereInputObjectSchema).array()]).optional(),
  reviewId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ReviewTagScalarWhereInputObjectSchema: z.ZodType<Prisma.ReviewTagScalarWhereInput> = reviewtagscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReviewTagScalarWhereInput>;
export const ReviewTagScalarWhereInputObjectZodSchema = reviewtagscalarwhereinputSchema;
