import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureSelectObjectSchema as RatingPictureSelectObjectSchema } from './objects/RatingPictureSelect.schema';
import { RatingPictureIncludeObjectSchema as RatingPictureIncludeObjectSchema } from './objects/RatingPictureInclude.schema';
import { RatingPictureCreateInputObjectSchema as RatingPictureCreateInputObjectSchema } from './objects/RatingPictureCreateInput.schema';
import { RatingPictureUncheckedCreateInputObjectSchema as RatingPictureUncheckedCreateInputObjectSchema } from './objects/RatingPictureUncheckedCreateInput.schema';

export const RatingPictureCreateOneSchema: z.ZodType<Prisma.RatingPictureCreateArgs> = z.object({ select: RatingPictureSelectObjectSchema.optional(), include: RatingPictureIncludeObjectSchema.optional(), data: z.union([RatingPictureCreateInputObjectSchema, RatingPictureUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RatingPictureCreateArgs>;

export const RatingPictureCreateOneZodSchema = z.object({ select: RatingPictureSelectObjectSchema.optional(), include: RatingPictureIncludeObjectSchema.optional(), data: z.union([RatingPictureCreateInputObjectSchema, RatingPictureUncheckedCreateInputObjectSchema]) }).strict();