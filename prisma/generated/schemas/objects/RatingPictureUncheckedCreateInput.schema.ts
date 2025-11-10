import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  ratingId: z.string(),
  url: z.string(),
  caption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const RatingPictureUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RatingPictureUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureUncheckedCreateInput>;
export const RatingPictureUncheckedCreateInputObjectZodSchema = makeSchema();
