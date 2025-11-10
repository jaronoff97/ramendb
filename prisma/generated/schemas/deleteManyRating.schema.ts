import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './objects/RatingWhereInput.schema';

export const RatingDeleteManySchema: z.ZodType<Prisma.RatingDeleteManyArgs> = z.object({ where: RatingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingDeleteManyArgs>;

export const RatingDeleteManyZodSchema = z.object({ where: RatingWhereInputObjectSchema.optional() }).strict();