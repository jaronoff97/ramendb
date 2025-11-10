import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  userId: z.string(),
  value: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const RatingCreateManyInputObjectSchema: z.ZodType<Prisma.RatingCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateManyInput>;
export const RatingCreateManyInputObjectZodSchema = makeSchema();
