import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ratingId: z.string()
}).strict();
export const RatingTagUncheckedCreateWithoutTagInputObjectSchema: z.ZodType<Prisma.RatingTagUncheckedCreateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUncheckedCreateWithoutTagInput>;
export const RatingTagUncheckedCreateWithoutTagInputObjectZodSchema = makeSchema();
