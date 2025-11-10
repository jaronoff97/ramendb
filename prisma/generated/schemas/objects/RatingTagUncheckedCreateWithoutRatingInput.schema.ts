import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tagId: z.string()
}).strict();
export const RatingTagUncheckedCreateWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingTagUncheckedCreateWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUncheckedCreateWithoutRatingInput>;
export const RatingTagUncheckedCreateWithoutRatingInputObjectZodSchema = makeSchema();
