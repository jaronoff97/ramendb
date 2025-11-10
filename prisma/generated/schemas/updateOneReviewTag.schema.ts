import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagSelectObjectSchema as ReviewTagSelectObjectSchema } from './objects/ReviewTagSelect.schema';
import { ReviewTagIncludeObjectSchema as ReviewTagIncludeObjectSchema } from './objects/ReviewTagInclude.schema';
import { ReviewTagUpdateInputObjectSchema as ReviewTagUpdateInputObjectSchema } from './objects/ReviewTagUpdateInput.schema';
import { ReviewTagUncheckedUpdateInputObjectSchema as ReviewTagUncheckedUpdateInputObjectSchema } from './objects/ReviewTagUncheckedUpdateInput.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './objects/ReviewTagWhereUniqueInput.schema';

export const ReviewTagUpdateOneSchema: z.ZodType<Prisma.ReviewTagUpdateArgs> = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), data: z.union([ReviewTagUpdateInputObjectSchema, ReviewTagUncheckedUpdateInputObjectSchema]), where: ReviewTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewTagUpdateArgs>;

export const ReviewTagUpdateOneZodSchema = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), data: z.union([ReviewTagUpdateInputObjectSchema, ReviewTagUncheckedUpdateInputObjectSchema]), where: ReviewTagWhereUniqueInputObjectSchema }).strict();