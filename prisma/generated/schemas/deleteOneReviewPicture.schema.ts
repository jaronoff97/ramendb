import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureSelectObjectSchema as ReviewPictureSelectObjectSchema } from './objects/ReviewPictureSelect.schema';
import { ReviewPictureIncludeObjectSchema as ReviewPictureIncludeObjectSchema } from './objects/ReviewPictureInclude.schema';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './objects/ReviewPictureWhereUniqueInput.schema';

export const ReviewPictureDeleteOneSchema: z.ZodType<Prisma.ReviewPictureDeleteArgs> = z.object({ select: ReviewPictureSelectObjectSchema.optional(), include: ReviewPictureIncludeObjectSchema.optional(), where: ReviewPictureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewPictureDeleteArgs>;

export const ReviewPictureDeleteOneZodSchema = z.object({ select: ReviewPictureSelectObjectSchema.optional(), include: ReviewPictureIncludeObjectSchema.optional(), where: ReviewPictureWhereUniqueInputObjectSchema }).strict();