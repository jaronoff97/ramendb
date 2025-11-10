import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  reviewId: z.string()
}).strict();
export const ReviewTagUncheckedCreateWithoutTagInputObjectSchema: z.ZodType<Prisma.ReviewTagUncheckedCreateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUncheckedCreateWithoutTagInput>;
export const ReviewTagUncheckedCreateWithoutTagInputObjectZodSchema = makeSchema();
