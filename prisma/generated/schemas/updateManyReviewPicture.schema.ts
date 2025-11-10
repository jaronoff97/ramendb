import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureUpdateManyMutationInputObjectSchema as ReviewPictureUpdateManyMutationInputObjectSchema } from './objects/ReviewPictureUpdateManyMutationInput.schema';
import { ReviewPictureWhereInputObjectSchema as ReviewPictureWhereInputObjectSchema } from './objects/ReviewPictureWhereInput.schema';

export const ReviewPictureUpdateManySchema: z.ZodType<Prisma.ReviewPictureUpdateManyArgs> = z.object({ data: ReviewPictureUpdateManyMutationInputObjectSchema, where: ReviewPictureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewPictureUpdateManyArgs>;

export const ReviewPictureUpdateManyZodSchema = z.object({ data: ReviewPictureUpdateManyMutationInputObjectSchema, where: ReviewPictureWhereInputObjectSchema.optional() }).strict();