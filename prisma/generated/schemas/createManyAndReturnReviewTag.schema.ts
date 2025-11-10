import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagSelectObjectSchema as ReviewTagSelectObjectSchema } from './objects/ReviewTagSelect.schema';
import { ReviewTagCreateManyInputObjectSchema as ReviewTagCreateManyInputObjectSchema } from './objects/ReviewTagCreateManyInput.schema';

export const ReviewTagCreateManyAndReturnSchema: z.ZodType<Prisma.ReviewTagCreateManyAndReturnArgs> = z.object({ select: ReviewTagSelectObjectSchema.optional(), data: z.union([ ReviewTagCreateManyInputObjectSchema, z.array(ReviewTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReviewTagCreateManyAndReturnArgs>;

export const ReviewTagCreateManyAndReturnZodSchema = z.object({ select: ReviewTagSelectObjectSchema.optional(), data: z.union([ ReviewTagCreateManyInputObjectSchema, z.array(ReviewTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();