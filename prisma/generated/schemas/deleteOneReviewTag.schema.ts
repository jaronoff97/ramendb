import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagSelectObjectSchema as ReviewTagSelectObjectSchema } from './objects/ReviewTagSelect.schema';
import { ReviewTagIncludeObjectSchema as ReviewTagIncludeObjectSchema } from './objects/ReviewTagInclude.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './objects/ReviewTagWhereUniqueInput.schema';

export const ReviewTagDeleteOneSchema: z.ZodType<Prisma.ReviewTagDeleteArgs> = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), where: ReviewTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewTagDeleteArgs>;

export const ReviewTagDeleteOneZodSchema = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), where: ReviewTagWhereUniqueInputObjectSchema }).strict();