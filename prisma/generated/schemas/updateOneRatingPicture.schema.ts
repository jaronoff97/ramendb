import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureSelectObjectSchema as RatingPictureSelectObjectSchema } from './objects/RatingPictureSelect.schema';
import { RatingPictureIncludeObjectSchema as RatingPictureIncludeObjectSchema } from './objects/RatingPictureInclude.schema';
import { RatingPictureUpdateInputObjectSchema as RatingPictureUpdateInputObjectSchema } from './objects/RatingPictureUpdateInput.schema';
import { RatingPictureUncheckedUpdateInputObjectSchema as RatingPictureUncheckedUpdateInputObjectSchema } from './objects/RatingPictureUncheckedUpdateInput.schema';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './objects/RatingPictureWhereUniqueInput.schema';

export const RatingPictureUpdateOneSchema: z.ZodType<Prisma.RatingPictureUpdateArgs> = z.object({ select: RatingPictureSelectObjectSchema.optional(), include: RatingPictureIncludeObjectSchema.optional(), data: z.union([RatingPictureUpdateInputObjectSchema, RatingPictureUncheckedUpdateInputObjectSchema]), where: RatingPictureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RatingPictureUpdateArgs>;

export const RatingPictureUpdateOneZodSchema = z.object({ select: RatingPictureSelectObjectSchema.optional(), include: RatingPictureIncludeObjectSchema.optional(), data: z.union([RatingPictureUpdateInputObjectSchema, RatingPictureUncheckedUpdateInputObjectSchema]), where: RatingPictureWhereUniqueInputObjectSchema }).strict();