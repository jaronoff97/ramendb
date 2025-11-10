import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ratingId: z.string(),
  tagId: z.string()
}).strict();
export const RatingTagRatingIdTagIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.RatingTagRatingIdTagIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagRatingIdTagIdCompoundUniqueInput>;
export const RatingTagRatingIdTagIdCompoundUniqueInputObjectZodSchema = makeSchema();
