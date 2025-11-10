import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagWhereInputObjectSchema as RatingTagWhereInputObjectSchema } from './RatingTagWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RatingTagWhereInputObjectSchema).optional(),
  some: z.lazy(() => RatingTagWhereInputObjectSchema).optional(),
  none: z.lazy(() => RatingTagWhereInputObjectSchema).optional()
}).strict();
export const RatingTagListRelationFilterObjectSchema: z.ZodType<Prisma.RatingTagListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagListRelationFilter>;
export const RatingTagListRelationFilterObjectZodSchema = makeSchema();
