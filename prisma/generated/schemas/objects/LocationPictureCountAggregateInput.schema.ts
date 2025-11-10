import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  locationId: z.literal(true).optional(),
  url: z.literal(true).optional(),
  caption: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LocationPictureCountAggregateInputObjectSchema: z.ZodType<Prisma.LocationPictureCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureCountAggregateInputType>;
export const LocationPictureCountAggregateInputObjectZodSchema = makeSchema();
