import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tagId: z.string()
}).strict();
export const ReviewTagUncheckedCreateWithoutReviewInputObjectSchema: z.ZodType<Prisma.ReviewTagUncheckedCreateWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUncheckedCreateWithoutReviewInput>;
export const ReviewTagUncheckedCreateWithoutReviewInputObjectZodSchema = makeSchema();
