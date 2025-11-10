import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  ratingId: z.literal(true).optional(),
  url: z.literal(true).optional(),
  caption: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RatingPictureCountAggregateInputObjectSchema: z.ZodType<Prisma.RatingPictureCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureCountAggregateInputType>;
export const RatingPictureCountAggregateInputObjectZodSchema = makeSchema();
