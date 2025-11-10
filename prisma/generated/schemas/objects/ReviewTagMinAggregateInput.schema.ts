import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  reviewId: z.literal(true).optional(),
  tagId: z.literal(true).optional()
}).strict();
export const ReviewTagMinAggregateInputObjectSchema: z.ZodType<Prisma.ReviewTagMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagMinAggregateInputType>;
export const ReviewTagMinAggregateInputObjectZodSchema = makeSchema();
