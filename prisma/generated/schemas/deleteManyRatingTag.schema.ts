import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagWhereInputObjectSchema as RatingTagWhereInputObjectSchema } from './objects/RatingTagWhereInput.schema';

export const RatingTagDeleteManySchema: z.ZodType<Prisma.RatingTagDeleteManyArgs> = z.object({ where: RatingTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingTagDeleteManyArgs>;

export const RatingTagDeleteManyZodSchema = z.object({ where: RatingTagWhereInputObjectSchema.optional() }).strict();