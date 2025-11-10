import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagSelectObjectSchema as RatingTagSelectObjectSchema } from './objects/RatingTagSelect.schema';
import { RatingTagCreateManyInputObjectSchema as RatingTagCreateManyInputObjectSchema } from './objects/RatingTagCreateManyInput.schema';

export const RatingTagCreateManyAndReturnSchema: z.ZodType<Prisma.RatingTagCreateManyAndReturnArgs> = z.object({ select: RatingTagSelectObjectSchema.optional(), data: z.union([ RatingTagCreateManyInputObjectSchema, z.array(RatingTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RatingTagCreateManyAndReturnArgs>;

export const RatingTagCreateManyAndReturnZodSchema = z.object({ select: RatingTagSelectObjectSchema.optional(), data: z.union([ RatingTagCreateManyInputObjectSchema, z.array(RatingTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();