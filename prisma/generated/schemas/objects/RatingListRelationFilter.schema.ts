import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RatingWhereInputObjectSchema).optional(),
  some: z.lazy(() => RatingWhereInputObjectSchema).optional(),
  none: z.lazy(() => RatingWhereInputObjectSchema).optional()
}).strict();
export const RatingListRelationFilterObjectSchema: z.ZodType<Prisma.RatingListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RatingListRelationFilter>;
export const RatingListRelationFilterObjectZodSchema = makeSchema();
