import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  reviewId: z.literal(true).optional(),
  tagId: z.literal(true).optional()
}).strict();
export const ReviewTagMaxAggregateInputObjectSchema: z.ZodType<Prisma.ReviewTagMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagMaxAggregateInputType>;
export const ReviewTagMaxAggregateInputObjectZodSchema = makeSchema();
