import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  caption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ReviewPictureUncheckedCreateWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewPictureUncheckedCreateWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureUncheckedCreateWithoutReviewInput>;
export const ReviewPictureUncheckedCreateWithoutReviewInputObjectZodSchema = makeSchema();
