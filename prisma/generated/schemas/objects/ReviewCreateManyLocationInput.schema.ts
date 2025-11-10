import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  ratingId: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ReviewCreateManyLocationInputObjectSchema: z.ZodType<Prisma.ReviewCreateManyLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyLocationInput>;
export const ReviewCreateManyLocationInputObjectZodSchema = makeSchema();
