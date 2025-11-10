import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureCreateManyInputObjectSchema as ReviewPictureCreateManyInputObjectSchema } from './objects/ReviewPictureCreateManyInput.schema';

export const ReviewPictureCreateManySchema: z.ZodType<Prisma.ReviewPictureCreateManyArgs> = z.object({ data: z.union([ ReviewPictureCreateManyInputObjectSchema, z.array(ReviewPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReviewPictureCreateManyArgs>;

export const ReviewPictureCreateManyZodSchema = z.object({ data: z.union([ ReviewPictureCreateManyInputObjectSchema, z.array(ReviewPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();