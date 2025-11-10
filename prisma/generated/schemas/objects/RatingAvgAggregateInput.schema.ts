import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  value: z.literal(true).optional()
}).strict();
export const RatingAvgAggregateInputObjectSchema: z.ZodType<Prisma.RatingAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RatingAvgAggregateInputType>;
export const RatingAvgAggregateInputObjectZodSchema = makeSchema();
