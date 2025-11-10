import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ratingId: z.string(),
  tagId: z.string()
}).strict();
export const RatingTagCreateManyInputObjectSchema: z.ZodType<Prisma.RatingTagCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateManyInput>;
export const RatingTagCreateManyInputObjectZodSchema = makeSchema();
