import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagUpdateManyMutationInputObjectSchema as ReviewTagUpdateManyMutationInputObjectSchema } from './objects/ReviewTagUpdateManyMutationInput.schema';
import { ReviewTagWhereInputObjectSchema as ReviewTagWhereInputObjectSchema } from './objects/ReviewTagWhereInput.schema';

export const ReviewTagUpdateManySchema: z.ZodType<Prisma.ReviewTagUpdateManyArgs> = z.object({ data: ReviewTagUpdateManyMutationInputObjectSchema, where: ReviewTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewTagUpdateManyArgs>;

export const ReviewTagUpdateManyZodSchema = z.object({ data: ReviewTagUpdateManyMutationInputObjectSchema, where: ReviewTagWhereInputObjectSchema.optional() }).strict();