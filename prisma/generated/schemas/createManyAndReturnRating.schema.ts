import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingSelectObjectSchema as RatingSelectObjectSchema } from './objects/RatingSelect.schema';
import { RatingCreateManyInputObjectSchema as RatingCreateManyInputObjectSchema } from './objects/RatingCreateManyInput.schema';

export const RatingCreateManyAndReturnSchema: z.ZodType<Prisma.RatingCreateManyAndReturnArgs> = z.object({ select: RatingSelectObjectSchema.optional(), data: z.union([ RatingCreateManyInputObjectSchema, z.array(RatingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RatingCreateManyAndReturnArgs>;

export const RatingCreateManyAndReturnZodSchema = z.object({ select: RatingSelectObjectSchema.optional(), data: z.union([ RatingCreateManyInputObjectSchema, z.array(RatingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();