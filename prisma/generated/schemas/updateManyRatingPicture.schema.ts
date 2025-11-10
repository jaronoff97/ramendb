import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureUpdateManyMutationInputObjectSchema as RatingPictureUpdateManyMutationInputObjectSchema } from './objects/RatingPictureUpdateManyMutationInput.schema';
import { RatingPictureWhereInputObjectSchema as RatingPictureWhereInputObjectSchema } from './objects/RatingPictureWhereInput.schema';

export const RatingPictureUpdateManySchema: z.ZodType<Prisma.RatingPictureUpdateManyArgs> = z.object({ data: RatingPictureUpdateManyMutationInputObjectSchema, where: RatingPictureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingPictureUpdateManyArgs>;

export const RatingPictureUpdateManyZodSchema = z.object({ data: RatingPictureUpdateManyMutationInputObjectSchema, where: RatingPictureWhereInputObjectSchema.optional() }).strict();