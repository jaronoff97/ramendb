import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagSelectObjectSchema as ReviewTagSelectObjectSchema } from './objects/ReviewTagSelect.schema';
import { ReviewTagIncludeObjectSchema as ReviewTagIncludeObjectSchema } from './objects/ReviewTagInclude.schema';
import { ReviewTagCreateInputObjectSchema as ReviewTagCreateInputObjectSchema } from './objects/ReviewTagCreateInput.schema';
import { ReviewTagUncheckedCreateInputObjectSchema as ReviewTagUncheckedCreateInputObjectSchema } from './objects/ReviewTagUncheckedCreateInput.schema';

export const ReviewTagCreateOneSchema: z.ZodType<Prisma.ReviewTagCreateArgs> = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), data: z.union([ReviewTagCreateInputObjectSchema, ReviewTagUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ReviewTagCreateArgs>;

export const ReviewTagCreateOneZodSchema = z.object({ select: ReviewTagSelectObjectSchema.optional(), include: ReviewTagIncludeObjectSchema.optional(), data: z.union([ReviewTagCreateInputObjectSchema, ReviewTagUncheckedCreateInputObjectSchema]) }).strict();