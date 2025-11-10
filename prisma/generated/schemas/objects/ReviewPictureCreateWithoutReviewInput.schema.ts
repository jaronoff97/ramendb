import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  caption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ReviewPictureCreateWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewPictureCreateWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureCreateWithoutReviewInput>;
export const ReviewPictureCreateWithoutReviewInputObjectZodSchema = makeSchema();
