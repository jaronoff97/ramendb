import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { RatingScalarRelationFilterObjectSchema as RatingScalarRelationFilterObjectSchema } from './RatingScalarRelationFilter.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema';
import { TagScalarRelationFilterObjectSchema as TagScalarRelationFilterObjectSchema } from './TagScalarRelationFilter.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const ratingtagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RatingTagWhereInputObjectSchema), z.lazy(() => RatingTagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RatingTagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RatingTagWhereInputObjectSchema), z.lazy(() => RatingTagWhereInputObjectSchema).array()]).optional(),
  ratingId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rating: z.union([z.lazy(() => RatingScalarRelationFilterObjectSchema), z.lazy(() => RatingWhereInputObjectSchema)]).optional(),
  tag: z.union([z.lazy(() => TagScalarRelationFilterObjectSchema), z.lazy(() => TagWhereInputObjectSchema)]).optional()
}).strict();
export const RatingTagWhereInputObjectSchema: z.ZodType<Prisma.RatingTagWhereInput> = ratingtagwhereinputSchema as unknown as z.ZodType<Prisma.RatingTagWhereInput>;
export const RatingTagWhereInputObjectZodSchema = ratingtagwhereinputSchema;
