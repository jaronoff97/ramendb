import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ratingId: z.literal(true).optional(),
  tagId: z.literal(true).optional()
}).strict();
export const RatingTagMinAggregateInputObjectSchema: z.ZodType<Prisma.RatingTagMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagMinAggregateInputType>;
export const RatingTagMinAggregateInputObjectZodSchema = makeSchema();
