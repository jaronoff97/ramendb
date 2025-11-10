import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureSelectObjectSchema as ReviewPictureSelectObjectSchema } from './objects/ReviewPictureSelect.schema';
import { ReviewPictureIncludeObjectSchema as ReviewPictureIncludeObjectSchema } from './objects/ReviewPictureInclude.schema';
import { ReviewPictureUpdateInputObjectSchema as ReviewPictureUpdateInputObjectSchema } from './objects/ReviewPictureUpdateInput.schema';
import { ReviewPictureUncheckedUpdateInputObjectSchema as ReviewPictureUncheckedUpdateInputObjectSchema } from './objects/ReviewPictureUncheckedUpdateInput.schema';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './objects/ReviewPictureWhereUniqueInput.schema';

export const ReviewPictureUpdateOneSchema: z.ZodType<Prisma.ReviewPictureUpdateArgs> = z.object({ select: ReviewPictureSelectObjectSchema.optional(), include: ReviewPictureIncludeObjectSchema.optional(), data: z.union([ReviewPictureUpdateInputObjectSchema, ReviewPictureUncheckedUpdateInputObjectSchema]), where: ReviewPictureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewPictureUpdateArgs>;

export const ReviewPictureUpdateOneZodSchema = z.object({ select: ReviewPictureSelectObjectSchema.optional(), include: ReviewPictureIncludeObjectSchema.optional(), data: z.union([ReviewPictureUpdateInputObjectSchema, ReviewPictureUncheckedUpdateInputObjectSchema]), where: ReviewPictureWhereUniqueInputObjectSchema }).strict();