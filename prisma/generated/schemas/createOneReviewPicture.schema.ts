import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureSelectObjectSchema as ReviewPictureSelectObjectSchema } from './objects/ReviewPictureSelect.schema';
import { ReviewPictureIncludeObjectSchema as ReviewPictureIncludeObjectSchema } from './objects/ReviewPictureInclude.schema';
import { ReviewPictureCreateInputObjectSchema as ReviewPictureCreateInputObjectSchema } from './objects/ReviewPictureCreateInput.schema';
import { ReviewPictureUncheckedCreateInputObjectSchema as ReviewPictureUncheckedCreateInputObjectSchema } from './objects/ReviewPictureUncheckedCreateInput.schema';

export const ReviewPictureCreateOneSchema: z.ZodType<Prisma.ReviewPictureCreateArgs> = z.object({ select: ReviewPictureSelectObjectSchema.optional(), include: ReviewPictureIncludeObjectSchema.optional(), data: z.union([ReviewPictureCreateInputObjectSchema, ReviewPictureUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ReviewPictureCreateArgs>;

export const ReviewPictureCreateOneZodSchema = z.object({ select: ReviewPictureSelectObjectSchema.optional(), include: ReviewPictureIncludeObjectSchema.optional(), data: z.union([ReviewPictureCreateInputObjectSchema, ReviewPictureUncheckedCreateInputObjectSchema]) }).strict();