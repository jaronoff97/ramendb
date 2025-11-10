import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagReviewIdTagIdCompoundUniqueInputObjectSchema as ReviewTagReviewIdTagIdCompoundUniqueInputObjectSchema } from './ReviewTagReviewIdTagIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  reviewId_tagId: z.lazy(() => ReviewTagReviewIdTagIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ReviewTagWhereUniqueInputObjectSchema: z.ZodType<Prisma.ReviewTagWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagWhereUniqueInput>;
export const ReviewTagWhereUniqueInputObjectZodSchema = makeSchema();
