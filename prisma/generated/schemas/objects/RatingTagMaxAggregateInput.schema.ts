import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ratingId: z.literal(true).optional(),
  tagId: z.literal(true).optional()
}).strict();
export const RatingTagMaxAggregateInputObjectSchema: z.ZodType<Prisma.RatingTagMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagMaxAggregateInputType>;
export const RatingTagMaxAggregateInputObjectZodSchema = makeSchema();
