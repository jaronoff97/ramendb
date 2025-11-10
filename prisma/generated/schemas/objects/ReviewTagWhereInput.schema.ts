import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ReviewScalarRelationFilterObjectSchema as ReviewScalarRelationFilterObjectSchema } from './ReviewScalarRelationFilter.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema';
import { TagScalarRelationFilterObjectSchema as TagScalarRelationFilterObjectSchema } from './TagScalarRelationFilter.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const reviewtagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewTagWhereInputObjectSchema), z.lazy(() => ReviewTagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewTagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewTagWhereInputObjectSchema), z.lazy(() => ReviewTagWhereInputObjectSchema).array()]).optional(),
  reviewId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  review: z.union([z.lazy(() => ReviewScalarRelationFilterObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema)]).optional(),
  tag: z.union([z.lazy(() => TagScalarRelationFilterObjectSchema), z.lazy(() => TagWhereInputObjectSchema)]).optional()
}).strict();
export const ReviewTagWhereInputObjectSchema: z.ZodType<Prisma.ReviewTagWhereInput> = reviewtagwhereinputSchema as unknown as z.ZodType<Prisma.ReviewTagWhereInput>;
export const ReviewTagWhereInputObjectZodSchema = reviewtagwhereinputSchema;
