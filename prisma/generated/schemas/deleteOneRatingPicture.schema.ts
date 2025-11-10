import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureSelectObjectSchema as RatingPictureSelectObjectSchema } from './objects/RatingPictureSelect.schema';
import { RatingPictureIncludeObjectSchema as RatingPictureIncludeObjectSchema } from './objects/RatingPictureInclude.schema';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './objects/RatingPictureWhereUniqueInput.schema';

export const RatingPictureDeleteOneSchema: z.ZodType<Prisma.RatingPictureDeleteArgs> = z.object({ select: RatingPictureSelectObjectSchema.optional(), include: RatingPictureIncludeObjectSchema.optional(), where: RatingPictureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RatingPictureDeleteArgs>;

export const RatingPictureDeleteOneZodSchema = z.object({ select: RatingPictureSelectObjectSchema.optional(), include: RatingPictureIncludeObjectSchema.optional(), where: RatingPictureWhereUniqueInputObjectSchema }).strict();