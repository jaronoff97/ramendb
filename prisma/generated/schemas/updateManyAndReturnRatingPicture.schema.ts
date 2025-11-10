import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureSelectObjectSchema as RatingPictureSelectObjectSchema } from './objects/RatingPictureSelect.schema';
import { RatingPictureUpdateManyMutationInputObjectSchema as RatingPictureUpdateManyMutationInputObjectSchema } from './objects/RatingPictureUpdateManyMutationInput.schema';
import { RatingPictureWhereInputObjectSchema as RatingPictureWhereInputObjectSchema } from './objects/RatingPictureWhereInput.schema';

export const RatingPictureUpdateManyAndReturnSchema: z.ZodType<Prisma.RatingPictureUpdateManyAndReturnArgs> = z.object({ select: RatingPictureSelectObjectSchema.optional(), data: RatingPictureUpdateManyMutationInputObjectSchema, where: RatingPictureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingPictureUpdateManyAndReturnArgs>;

export const RatingPictureUpdateManyAndReturnZodSchema = z.object({ select: RatingPictureSelectObjectSchema.optional(), data: RatingPictureUpdateManyMutationInputObjectSchema, where: RatingPictureWhereInputObjectSchema.optional() }).strict();