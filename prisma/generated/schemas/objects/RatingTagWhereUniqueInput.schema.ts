import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagRatingIdTagIdCompoundUniqueInputObjectSchema as RatingTagRatingIdTagIdCompoundUniqueInputObjectSchema } from './RatingTagRatingIdTagIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  ratingId_tagId: z.lazy(() => RatingTagRatingIdTagIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const RatingTagWhereUniqueInputObjectSchema: z.ZodType<Prisma.RatingTagWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagWhereUniqueInput>;
export const RatingTagWhereUniqueInputObjectZodSchema = makeSchema();
