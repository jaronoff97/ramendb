import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureSelectObjectSchema as RatingPictureSelectObjectSchema } from './objects/RatingPictureSelect.schema';
import { RatingPictureIncludeObjectSchema as RatingPictureIncludeObjectSchema } from './objects/RatingPictureInclude.schema';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './objects/RatingPictureWhereUniqueInput.schema';

export const RatingPictureFindUniqueSchema: z.ZodType<Prisma.RatingPictureFindUniqueArgs> = z.object({ select: RatingPictureSelectObjectSchema.optional(), include: RatingPictureIncludeObjectSchema.optional(), where: RatingPictureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RatingPictureFindUniqueArgs>;

export const RatingPictureFindUniqueZodSchema = z.object({ select: RatingPictureSelectObjectSchema.optional(), include: RatingPictureIncludeObjectSchema.optional(), where: RatingPictureWhereUniqueInputObjectSchema }).strict();