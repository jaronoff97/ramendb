import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureWhereInputObjectSchema as ReviewPictureWhereInputObjectSchema } from './objects/ReviewPictureWhereInput.schema';

export const ReviewPictureDeleteManySchema: z.ZodType<Prisma.ReviewPictureDeleteManyArgs> = z.object({ where: ReviewPictureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewPictureDeleteManyArgs>;

export const ReviewPictureDeleteManyZodSchema = z.object({ where: ReviewPictureWhereInputObjectSchema.optional() }).strict();