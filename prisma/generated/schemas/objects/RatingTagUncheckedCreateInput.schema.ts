import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ratingId: z.string(),
  tagId: z.string()
}).strict();
export const RatingTagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RatingTagUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUncheckedCreateInput>;
export const RatingTagUncheckedCreateInputObjectZodSchema = makeSchema();
