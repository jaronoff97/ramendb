import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureSelectObjectSchema as ReviewPictureSelectObjectSchema } from './objects/ReviewPictureSelect.schema';
import { ReviewPictureIncludeObjectSchema as ReviewPictureIncludeObjectSchema } from './objects/ReviewPictureInclude.schema';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './objects/ReviewPictureWhereUniqueInput.schema';
import { ReviewPictureCreateInputObjectSchema as ReviewPictureCreateInputObjectSchema } from './objects/ReviewPictureCreateInput.schema';
import { ReviewPictureUncheckedCreateInputObjectSchema as ReviewPictureUncheckedCreateInputObjectSchema } from './objects/ReviewPictureUncheckedCreateInput.schema';
import { ReviewPictureUpdateInputObjectSchema as ReviewPictureUpdateInputObjectSchema } from './objects/ReviewPictureUpdateInput.schema';
import { ReviewPictureUncheckedUpdateInputObjectSchema as ReviewPictureUncheckedUpdateInputObjectSchema } from './objects/ReviewPictureUncheckedUpdateInput.schema';

export const ReviewPictureUpsertOneSchema: z.ZodType<Prisma.ReviewPictureUpsertArgs> = z.object({ select: ReviewPictureSelectObjectSchema.optional(), include: ReviewPictureIncludeObjectSchema.optional(), where: ReviewPictureWhereUniqueInputObjectSchema, create: z.union([ ReviewPictureCreateInputObjectSchema, ReviewPictureUncheckedCreateInputObjectSchema ]), update: z.union([ ReviewPictureUpdateInputObjectSchema, ReviewPictureUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ReviewPictureUpsertArgs>;

export const ReviewPictureUpsertOneZodSchema = z.object({ select: ReviewPictureSelectObjectSchema.optional(), include: ReviewPictureIncludeObjectSchema.optional(), where: ReviewPictureWhereUniqueInputObjectSchema, create: z.union([ ReviewPictureCreateInputObjectSchema, ReviewPictureUncheckedCreateInputObjectSchema ]), update: z.union([ ReviewPictureUpdateInputObjectSchema, ReviewPictureUncheckedUpdateInputObjectSchema ]) }).strict();