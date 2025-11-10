import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  ratingId: z.string(),
  url: z.string(),
  caption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const RatingPictureCreateManyInputObjectSchema: z.ZodType<Prisma.RatingPictureCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureCreateManyInput>;
export const RatingPictureCreateManyInputObjectZodSchema = makeSchema();
