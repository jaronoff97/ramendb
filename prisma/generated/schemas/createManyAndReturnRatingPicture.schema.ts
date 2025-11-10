import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureSelectObjectSchema as RatingPictureSelectObjectSchema } from './objects/RatingPictureSelect.schema';
import { RatingPictureCreateManyInputObjectSchema as RatingPictureCreateManyInputObjectSchema } from './objects/RatingPictureCreateManyInput.schema';

export const RatingPictureCreateManyAndReturnSchema: z.ZodType<Prisma.RatingPictureCreateManyAndReturnArgs> = z.object({ select: RatingPictureSelectObjectSchema.optional(), data: z.union([ RatingPictureCreateManyInputObjectSchema, z.array(RatingPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RatingPictureCreateManyAndReturnArgs>;

export const RatingPictureCreateManyAndReturnZodSchema = z.object({ select: RatingPictureSelectObjectSchema.optional(), data: z.union([ RatingPictureCreateManyInputObjectSchema, z.array(RatingPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();