import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ratingId: z.literal(true).optional(),
  tagId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RatingTagCountAggregateInputObjectSchema: z.ZodType<Prisma.RatingTagCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCountAggregateInputType>;
export const RatingTagCountAggregateInputObjectZodSchema = makeSchema();
