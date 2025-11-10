import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ratingId: z.string()
}).strict();
export const RatingTagCreateManyTagInputObjectSchema: z.ZodType<Prisma.RatingTagCreateManyTagInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateManyTagInput>;
export const RatingTagCreateManyTagInputObjectZodSchema = makeSchema();
