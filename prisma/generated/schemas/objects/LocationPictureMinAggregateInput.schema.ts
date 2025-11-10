import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  locationId: z.literal(true).optional(),
  url: z.literal(true).optional(),
  caption: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const LocationPictureMinAggregateInputObjectSchema: z.ZodType<Prisma.LocationPictureMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureMinAggregateInputType>;
export const LocationPictureMinAggregateInputObjectZodSchema = makeSchema();
