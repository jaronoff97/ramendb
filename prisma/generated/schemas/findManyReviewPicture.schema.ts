import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureIncludeObjectSchema as ReviewPictureIncludeObjectSchema } from './objects/ReviewPictureInclude.schema';
import { ReviewPictureOrderByWithRelationInputObjectSchema as ReviewPictureOrderByWithRelationInputObjectSchema } from './objects/ReviewPictureOrderByWithRelationInput.schema';
import { ReviewPictureWhereInputObjectSchema as ReviewPictureWhereInputObjectSchema } from './objects/ReviewPictureWhereInput.schema';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './objects/ReviewPictureWhereUniqueInput.schema';
import { ReviewPictureScalarFieldEnumSchema } from './enums/ReviewPictureScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReviewPictureFindManySelectSchema: z.ZodType<Prisma.ReviewPictureSelect> = z.object({
    id: z.boolean().optional(),
    reviewId: z.boolean().optional(),
    url: z.boolean().optional(),
    caption: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    review: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReviewPictureSelect>;

export const ReviewPictureFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    reviewId: z.boolean().optional(),
    url: z.boolean().optional(),
    caption: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    review: z.boolean().optional()
  }).strict();

export const ReviewPictureFindManySchema: z.ZodType<Prisma.ReviewPictureFindManyArgs> = z.object({ select: ReviewPictureFindManySelectSchema.optional(), include: z.lazy(() => ReviewPictureIncludeObjectSchema.optional()), orderBy: z.union([ReviewPictureOrderByWithRelationInputObjectSchema, ReviewPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewPictureWhereInputObjectSchema.optional(), cursor: ReviewPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReviewPictureScalarFieldEnumSchema, ReviewPictureScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReviewPictureFindManyArgs>;

export const ReviewPictureFindManyZodSchema = z.object({ select: ReviewPictureFindManySelectSchema.optional(), include: z.lazy(() => ReviewPictureIncludeObjectSchema.optional()), orderBy: z.union([ReviewPictureOrderByWithRelationInputObjectSchema, ReviewPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewPictureWhereInputObjectSchema.optional(), cursor: ReviewPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReviewPictureScalarFieldEnumSchema, ReviewPictureScalarFieldEnumSchema.array()]).optional() }).strict();