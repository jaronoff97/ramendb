import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagWhereInputObjectSchema as ReviewTagWhereInputObjectSchema } from './objects/ReviewTagWhereInput.schema';

export const ReviewTagDeleteManySchema: z.ZodType<Prisma.ReviewTagDeleteManyArgs> = z.object({ where: ReviewTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewTagDeleteManyArgs>;

export const ReviewTagDeleteManyZodSchema = z.object({ where: ReviewTagWhereInputObjectSchema.optional() }).strict();