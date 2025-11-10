import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  reviewId: z.string(),
  tagId: z.string()
}).strict();
export const ReviewTagReviewIdTagIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ReviewTagReviewIdTagIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagReviewIdTagIdCompoundUniqueInput>;
export const ReviewTagReviewIdTagIdCompoundUniqueInputObjectZodSchema = makeSchema();
