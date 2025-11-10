import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  value: z.literal(true).optional()
}).strict();
export const RatingSumAggregateInputObjectSchema: z.ZodType<Prisma.RatingSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RatingSumAggregateInputType>;
export const RatingSumAggregateInputObjectZodSchema = makeSchema();
