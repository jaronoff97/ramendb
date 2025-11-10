import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureSelectObjectSchema as ReviewPictureSelectObjectSchema } from './objects/ReviewPictureSelect.schema';
import { ReviewPictureUpdateManyMutationInputObjectSchema as ReviewPictureUpdateManyMutationInputObjectSchema } from './objects/ReviewPictureUpdateManyMutationInput.schema';
import { ReviewPictureWhereInputObjectSchema as ReviewPictureWhereInputObjectSchema } from './objects/ReviewPictureWhereInput.schema';

export const ReviewPictureUpdateManyAndReturnSchema: z.ZodType<Prisma.ReviewPictureUpdateManyAndReturnArgs> = z.object({ select: ReviewPictureSelectObjectSchema.optional(), data: ReviewPictureUpdateManyMutationInputObjectSchema, where: ReviewPictureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewPictureUpdateManyAndReturnArgs>;

export const ReviewPictureUpdateManyAndReturnZodSchema = z.object({ select: ReviewPictureSelectObjectSchema.optional(), data: ReviewPictureUpdateManyMutationInputObjectSchema, where: ReviewPictureWhereInputObjectSchema.optional() }).strict();