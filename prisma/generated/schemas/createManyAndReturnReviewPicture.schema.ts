import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureSelectObjectSchema as ReviewPictureSelectObjectSchema } from './objects/ReviewPictureSelect.schema';
import { ReviewPictureCreateManyInputObjectSchema as ReviewPictureCreateManyInputObjectSchema } from './objects/ReviewPictureCreateManyInput.schema';

export const ReviewPictureCreateManyAndReturnSchema: z.ZodType<Prisma.ReviewPictureCreateManyAndReturnArgs> = z.object({ select: ReviewPictureSelectObjectSchema.optional(), data: z.union([ ReviewPictureCreateManyInputObjectSchema, z.array(ReviewPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReviewPictureCreateManyAndReturnArgs>;

export const ReviewPictureCreateManyAndReturnZodSchema = z.object({ select: ReviewPictureSelectObjectSchema.optional(), data: z.union([ ReviewPictureCreateManyInputObjectSchema, z.array(ReviewPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();