import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  locationId: z.literal(true).optional(),
  tagId: z.literal(true).optional()
}).strict();
export const LocationTagMaxAggregateInputObjectSchema: z.ZodType<Prisma.LocationTagMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagMaxAggregateInputType>;
export const LocationTagMaxAggregateInputObjectZodSchema = makeSchema();
