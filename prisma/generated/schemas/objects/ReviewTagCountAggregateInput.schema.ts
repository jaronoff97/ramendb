import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  reviewId: z.literal(true).optional(),
  tagId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ReviewTagCountAggregateInputObjectSchema: z.ZodType<Prisma.ReviewTagCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCountAggregateInputType>;
export const ReviewTagCountAggregateInputObjectZodSchema = makeSchema();
