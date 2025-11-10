import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagWhereInputObjectSchema as ReviewTagWhereInputObjectSchema } from './ReviewTagWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReviewTagWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReviewTagWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReviewTagWhereInputObjectSchema).optional()
}).strict();
export const ReviewTagListRelationFilterObjectSchema: z.ZodType<Prisma.ReviewTagListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagListRelationFilter>;
export const ReviewTagListRelationFilterObjectZodSchema = makeSchema();
