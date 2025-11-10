import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureIncludeObjectSchema as ReviewPictureIncludeObjectSchema } from './objects/ReviewPictureInclude.schema';
import { ReviewPictureOrderByWithRelationInputObjectSchema as ReviewPictureOrderByWithRelationInputObjectSchema } from './objects/ReviewPictureOrderByWithRelationInput.schema';
import { ReviewPictureWhereInputObjectSchema as ReviewPictureWhereInputObjectSchema } from './objects/ReviewPictureWhereInput.schema';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './objects/ReviewPictureWhereUniqueInput.schema';
import { ReviewPictureScalarFieldEnumSchema } from './enums/ReviewPictureScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReviewPictureFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReviewPictureSelect> = z.object({
    id: z.boolean().optional(),
    reviewId: z.boolean().optional(),
    url: z.boolean().optional(),
    caption: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    review: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReviewPictureSelect>;

export const ReviewPictureFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    reviewId: z.boolean().optional(),
    url: z.boolean().optional(),
    caption: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    review: z.boolean().optional()
  }).strict();

export const ReviewPictureFindFirstOrThrowSchema: z.ZodType<Prisma.ReviewPictureFindFirstOrThrowArgs> = z.object({ select: ReviewPictureFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReviewPictureIncludeObjectSchema.optional()), orderBy: z.union([ReviewPictureOrderByWithRelationInputObjectSchema, ReviewPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewPictureWhereInputObjectSchema.optional(), cursor: ReviewPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReviewPictureScalarFieldEnumSchema, ReviewPictureScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReviewPictureFindFirstOrThrowArgs>;

export const ReviewPictureFindFirstOrThrowZodSchema = z.object({ select: ReviewPictureFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReviewPictureIncludeObjectSchema.optional()), orderBy: z.union([ReviewPictureOrderByWithRelationInputObjectSchema, ReviewPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewPictureWhereInputObjectSchema.optional(), cursor: ReviewPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReviewPictureScalarFieldEnumSchema, ReviewPictureScalarFieldEnumSchema.array()]).optional() }).strict();