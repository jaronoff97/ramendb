import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ReviewWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ReviewWhereInputObjectSchema).optional()
}).strict();
export const ReviewScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReviewScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReviewScalarRelationFilter>;
export const ReviewScalarRelationFilterObjectZodSchema = makeSchema();
