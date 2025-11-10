import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  userId: z.string(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ReviewCreateManyRatingInputObjectSchema: z.ZodType<Prisma.ReviewCreateManyRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyRatingInput>;
export const ReviewCreateManyRatingInputObjectZodSchema = makeSchema();
