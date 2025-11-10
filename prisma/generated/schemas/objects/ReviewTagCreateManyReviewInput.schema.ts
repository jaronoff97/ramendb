import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tagId: z.string()
}).strict();
export const ReviewTagCreateManyReviewInputObjectSchema: z.ZodType<Prisma.ReviewTagCreateManyReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateManyReviewInput>;
export const ReviewTagCreateManyReviewInputObjectZodSchema = makeSchema();
