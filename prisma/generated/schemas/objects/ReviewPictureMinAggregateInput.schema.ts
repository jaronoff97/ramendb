import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  reviewId: z.literal(true).optional(),
  url: z.literal(true).optional(),
  caption: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ReviewPictureMinAggregateInputObjectSchema: z.ZodType<Prisma.ReviewPictureMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureMinAggregateInputType>;
export const ReviewPictureMinAggregateInputObjectZodSchema = makeSchema();
