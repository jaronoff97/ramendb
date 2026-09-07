import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  osmId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  address: z.literal(true).optional(),
  city: z.literal(true).optional(),
  state: z.literal(true).optional(),
  country: z.literal(true).optional(),
  latitude: z.literal(true).optional(),
  longitude: z.literal(true).optional(),
  website: z.literal(true).optional(),
  hours: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LocationCountAggregateInputObjectSchema: z.ZodType<Prisma.LocationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LocationCountAggregateInputType>;
export const LocationCountAggregateInputObjectZodSchema = makeSchema();
