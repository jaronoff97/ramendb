import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureWhereInputObjectSchema as RatingPictureWhereInputObjectSchema } from './objects/RatingPictureWhereInput.schema';

export const RatingPictureDeleteManySchema: z.ZodType<Prisma.RatingPictureDeleteManyArgs> = z.object({ where: RatingPictureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingPictureDeleteManyArgs>;

export const RatingPictureDeleteManyZodSchema = z.object({ where: RatingPictureWhereInputObjectSchema.optional() }).strict();