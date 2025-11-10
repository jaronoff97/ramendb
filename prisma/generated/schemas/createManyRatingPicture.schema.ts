import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureCreateManyInputObjectSchema as RatingPictureCreateManyInputObjectSchema } from './objects/RatingPictureCreateManyInput.schema';

export const RatingPictureCreateManySchema: z.ZodType<Prisma.RatingPictureCreateManyArgs> = z.object({ data: z.union([ RatingPictureCreateManyInputObjectSchema, z.array(RatingPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RatingPictureCreateManyArgs>;

export const RatingPictureCreateManyZodSchema = z.object({ data: z.union([ RatingPictureCreateManyInputObjectSchema, z.array(RatingPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();