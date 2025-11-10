import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagSelectObjectSchema as ReviewTagSelectObjectSchema } from './objects/ReviewTagSelect.schema';
import { ReviewTagIncludeObjectSchema as ReviewTagIncludeObjectSchema } from './objects/ReviewTagInclude.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './objects/ReviewTagWhereUniqueInput.schema';
import { ReviewTagCreateInputObjectSchema as ReviewTagCreateInputObjectSchema } from './objects/ReviewTagCreateInput.schema';
import { ReviewTagUncheckedCreateInputObjectSchema as ReviewTagUncheckedCreateInputObjectSchema } from './objects/ReviewTagUncheckedCreateInput.schema';
import { ReviewTagUpdateInputObjectSchema as ReviewTagUpdateInputObjectSchema } from './objects/ReviewTagUpdateInput.schema';
import { ReviewTagUncheckedUpdateInputObjectSchema as ReviewTagUncheckedUpdateInputObjectSchema } from './objects/ReviewTagUncheckedUpdateInput.schema';

export const ReviewTagUpsertOneSchema: z.ZodType<Prisma.ReviewTagUpsertArgs> = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), where: ReviewTagWhereUniqueInputObjectSchema, create: z.union([ ReviewTagCreateInputObjectSchema, ReviewTagUncheckedCreateInputObjectSchema ]), update: z.union([ ReviewTagUpdateInputObjectSchema, ReviewTagUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ReviewTagUpsertArgs>;

export const ReviewTagUpsertOneZodSchema = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), where: ReviewTagWhereUniqueInputObjectSchema, create: z.union([ ReviewTagCreateInputObjectSchema, ReviewTagUncheckedCreateInputObjectSchema ]), update: z.union([ ReviewTagUpdateInputObjectSchema, ReviewTagUncheckedUpdateInputObjectSchema ]) }).strict();