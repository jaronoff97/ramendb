import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureSelectObjectSchema as ReviewPictureSelectObjectSchema } from './objects/ReviewPictureSelect.schema';
import { ReviewPictureIncludeObjectSchema as ReviewPictureIncludeObjectSchema } from './objects/ReviewPictureInclude.schema';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './objects/ReviewPictureWhereUniqueInput.schema';

export const ReviewPictureFindUniqueSchema: z.ZodType<Prisma.ReviewPictureFindUniqueArgs> = z.object({ select: ReviewPictureSelectObjectSchema.optional(), include: ReviewPictureIncludeObjectSchema.optional(), where: ReviewPictureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewPictureFindUniqueArgs>;

export const ReviewPictureFindUniqueZodSchema = z.object({ select: ReviewPictureSelectObjectSchema.optional(), include: ReviewPictureIncludeObjectSchema.optional(), where: ReviewPictureWhereUniqueInputObjectSchema }).strict();