import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  locationId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  value: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const RatingMinAggregateInputObjectSchema: z.ZodType<Prisma.RatingMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RatingMinAggregateInputType>;
export const RatingMinAggregateInputObjectZodSchema = makeSchema();
