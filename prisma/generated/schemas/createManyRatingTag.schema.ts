import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagCreateManyInputObjectSchema as RatingTagCreateManyInputObjectSchema } from './objects/RatingTagCreateManyInput.schema';

export const RatingTagCreateManySchema: z.ZodType<Prisma.RatingTagCreateManyArgs> = z.object({ data: z.union([ RatingTagCreateManyInputObjectSchema, z.array(RatingTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RatingTagCreateManyArgs>;

export const RatingTagCreateManyZodSchema = z.object({ data: z.union([ RatingTagCreateManyInputObjectSchema, z.array(RatingTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();