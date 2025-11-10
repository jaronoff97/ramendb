import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagSelectObjectSchema as ReviewTagSelectObjectSchema } from './objects/ReviewTagSelect.schema';
import { ReviewTagUpdateManyMutationInputObjectSchema as ReviewTagUpdateManyMutationInputObjectSchema } from './objects/ReviewTagUpdateManyMutationInput.schema';
import { ReviewTagWhereInputObjectSchema as ReviewTagWhereInputObjectSchema } from './objects/ReviewTagWhereInput.schema';

export const ReviewTagUpdateManyAndReturnSchema: z.ZodType<Prisma.ReviewTagUpdateManyAndReturnArgs> = z.object({ select: ReviewTagSelectObjectSchema.optional(), data: ReviewTagUpdateManyMutationInputObjectSchema, where: ReviewTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewTagUpdateManyAndReturnArgs>;

export const ReviewTagUpdateManyAndReturnZodSchema = z.object({ select: ReviewTagSelectObjectSchema.optional(), data: ReviewTagUpdateManyMutationInputObjectSchema, where: ReviewTagWhereInputObjectSchema.optional() }).strict();