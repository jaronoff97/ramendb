import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  locationId: z.literal(true).optional(),
  tagId: z.literal(true).optional()
}).strict();
export const LocationTagMinAggregateInputObjectSchema: z.ZodType<Prisma.LocationTagMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagMinAggregateInputType>;
export const LocationTagMinAggregateInputObjectZodSchema = makeSchema();
