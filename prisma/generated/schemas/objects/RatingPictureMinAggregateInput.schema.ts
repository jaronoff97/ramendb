import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  ratingId: z.literal(true).optional(),
  url: z.literal(true).optional(),
  caption: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const RatingPictureMinAggregateInputObjectSchema: z.ZodType<Prisma.RatingPictureMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureMinAggregateInputType>;
export const RatingPictureMinAggregateInputObjectZodSchema = makeSchema();
