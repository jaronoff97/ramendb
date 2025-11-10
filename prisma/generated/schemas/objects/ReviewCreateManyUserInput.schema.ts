import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  ratingId: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ReviewCreateManyUserInputObjectSchema: z.ZodType<Prisma.ReviewCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyUserInput>;
export const ReviewCreateManyUserInputObjectZodSchema = makeSchema();
