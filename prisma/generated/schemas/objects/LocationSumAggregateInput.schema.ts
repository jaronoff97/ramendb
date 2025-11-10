import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  latitude: z.literal(true).optional(),
  longitude: z.literal(true).optional()
}).strict();
export const LocationSumAggregateInputObjectSchema: z.ZodType<Prisma.LocationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LocationSumAggregateInputType>;
export const LocationSumAggregateInputObjectZodSchema = makeSchema();
