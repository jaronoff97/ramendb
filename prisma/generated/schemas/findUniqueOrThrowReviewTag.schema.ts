import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagSelectObjectSchema as ReviewTagSelectObjectSchema } from './objects/ReviewTagSelect.schema';
import { ReviewTagIncludeObjectSchema as ReviewTagIncludeObjectSchema } from './objects/ReviewTagInclude.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './objects/ReviewTagWhereUniqueInput.schema';

export const ReviewTagFindUniqueOrThrowSchema: z.ZodType<Prisma.ReviewTagFindUniqueOrThrowArgs> = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), where: ReviewTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewTagFindUniqueOrThrowArgs>;

export const ReviewTagFindUniqueOrThrowZodSchema = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), where: ReviewTagWhereUniqueInputObjectSchema }).strict();