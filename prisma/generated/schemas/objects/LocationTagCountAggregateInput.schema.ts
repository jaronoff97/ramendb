import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  locationId: z.literal(true).optional(),
  tagId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LocationTagCountAggregateInputObjectSchema: z.ZodType<Prisma.LocationTagCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCountAggregateInputType>;
export const LocationTagCountAggregateInputObjectZodSchema = makeSchema();
