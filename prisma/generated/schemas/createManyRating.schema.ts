import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingCreateManyInputObjectSchema as RatingCreateManyInputObjectSchema } from './objects/RatingCreateManyInput.schema';

export const RatingCreateManySchema: z.ZodType<Prisma.RatingCreateManyArgs> = z.object({ data: z.union([ RatingCreateManyInputObjectSchema, z.array(RatingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RatingCreateManyArgs>;

export const RatingCreateManyZodSchema = z.object({ data: z.union([ RatingCreateManyInputObjectSchema, z.array(RatingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();