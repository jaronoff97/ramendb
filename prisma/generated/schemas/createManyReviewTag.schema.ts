import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagCreateManyInputObjectSchema as ReviewTagCreateManyInputObjectSchema } from './objects/ReviewTagCreateManyInput.schema';

export const ReviewTagCreateManySchema: z.ZodType<Prisma.ReviewTagCreateManyArgs> = z.object({ data: z.union([ ReviewTagCreateManyInputObjectSchema, z.array(ReviewTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReviewTagCreateManyArgs>;

export const ReviewTagCreateManyZodSchema = z.object({ data: z.union([ ReviewTagCreateManyInputObjectSchema, z.array(ReviewTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();