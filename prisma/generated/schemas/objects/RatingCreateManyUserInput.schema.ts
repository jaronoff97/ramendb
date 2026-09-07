import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  value: z.number().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const RatingCreateManyUserInputObjectSchema: z.ZodType<Prisma.RatingCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateManyUserInput>;
export const RatingCreateManyUserInputObjectZodSchema = makeSchema();
