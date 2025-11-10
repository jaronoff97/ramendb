import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tagId: z.string()
}).strict();
export const RatingTagCreateManyRatingInputObjectSchema: z.ZodType<Prisma.RatingTagCreateManyRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateManyRatingInput>;
export const RatingTagCreateManyRatingInputObjectZodSchema = makeSchema();
