import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingArgsObjectSchema as RatingArgsObjectSchema } from './RatingArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  ratingId: z.boolean().optional(),
  url: z.boolean().optional(),
  caption: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  rating: z.union([z.boolean(), z.lazy(() => RatingArgsObjectSchema)]).optional()
}).strict();
export const RatingPictureSelectObjectSchema: z.ZodType<Prisma.RatingPictureSelect> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureSelect>;
export const RatingPictureSelectObjectZodSchema = makeSchema();
