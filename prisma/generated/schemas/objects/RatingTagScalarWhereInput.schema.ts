import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const ratingtagscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RatingTagScalarWhereInputObjectSchema), z.lazy(() => RatingTagScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RatingTagScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RatingTagScalarWhereInputObjectSchema), z.lazy(() => RatingTagScalarWhereInputObjectSchema).array()]).optional(),
  ratingId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const RatingTagScalarWhereInputObjectSchema: z.ZodType<Prisma.RatingTagScalarWhereInput> = ratingtagscalarwhereinputSchema as unknown as z.ZodType<Prisma.RatingTagScalarWhereInput>;
export const RatingTagScalarWhereInputObjectZodSchema = ratingtagscalarwhereinputSchema;
