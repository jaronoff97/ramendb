import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagSelectObjectSchema as ReviewTagSelectObjectSchema } from './objects/ReviewTagSelect.schema';
import { ReviewTagIncludeObjectSchema as ReviewTagIncludeObjectSchema } from './objects/ReviewTagInclude.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './objects/ReviewTagWhereUniqueInput.schema';

export const ReviewTagFindUniqueSchema: z.ZodType<Prisma.ReviewTagFindUniqueArgs> = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), where: ReviewTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewTagFindUniqueArgs>;

export const ReviewTagFindUniqueZodSchema = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), where: ReviewTagWhereUniqueInputObjectSchema }).strict();