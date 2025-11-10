import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  reviewId: z.string(),
  url: z.string(),
  caption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ReviewPictureUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ReviewPictureUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureUncheckedCreateInput>;
export const ReviewPictureUncheckedCreateInputObjectZodSchema = makeSchema();
