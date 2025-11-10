import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  value: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const RatingCreateManyLocationInputObjectSchema: z.ZodType<Prisma.RatingCreateManyLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateManyLocationInput>;
export const RatingCreateManyLocationInputObjectZodSchema = makeSchema();
