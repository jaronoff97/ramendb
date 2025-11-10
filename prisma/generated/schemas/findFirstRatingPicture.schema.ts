import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureIncludeObjectSchema as RatingPictureIncludeObjectSchema } from './objects/RatingPictureInclude.schema';
import { RatingPictureOrderByWithRelationInputObjectSchema as RatingPictureOrderByWithRelationInputObjectSchema } from './objects/RatingPictureOrderByWithRelationInput.schema';
import { RatingPictureWhereInputObjectSchema as RatingPictureWhereInputObjectSchema } from './objects/RatingPictureWhereInput.schema';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './objects/RatingPictureWhereUniqueInput.schema';
import { RatingPictureScalarFieldEnumSchema } from './enums/RatingPictureScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RatingPictureFindFirstSelectSchema: z.ZodType<Prisma.RatingPictureSelect> = z.object({
    id: z.boolean().optional(),
    ratingId: z.boolean().optional(),
    url: z.boolean().optional(),
    caption: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    rating: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RatingPictureSelect>;

export const RatingPictureFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    ratingId: z.boolean().optional(),
    url: z.boolean().optional(),
    caption: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    rating: z.boolean().optional()
  }).strict();

export const RatingPictureFindFirstSchema: z.ZodType<Prisma.RatingPictureFindFirstArgs> = z.object({ select: RatingPictureFindFirstSelectSchema.optional(), include: z.lazy(() => RatingPictureIncludeObjectSchema.optional()), orderBy: z.union([RatingPictureOrderByWithRelationInputObjectSchema, RatingPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingPictureWhereInputObjectSchema.optional(), cursor: RatingPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RatingPictureScalarFieldEnumSchema, RatingPictureScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RatingPictureFindFirstArgs>;

export const RatingPictureFindFirstZodSchema = z.object({ select: RatingPictureFindFirstSelectSchema.optional(), include: z.lazy(() => RatingPictureIncludeObjectSchema.optional()), orderBy: z.union([RatingPictureOrderByWithRelationInputObjectSchema, RatingPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingPictureWhereInputObjectSchema.optional(), cursor: RatingPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RatingPictureScalarFieldEnumSchema, RatingPictureScalarFieldEnumSchema.array()]).optional() }).strict();