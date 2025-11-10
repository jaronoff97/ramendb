import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagUpdateManyMutationInputObjectSchema as RatingTagUpdateManyMutationInputObjectSchema } from './objects/RatingTagUpdateManyMutationInput.schema';
import { RatingTagWhereInputObjectSchema as RatingTagWhereInputObjectSchema } from './objects/RatingTagWhereInput.schema';

export const RatingTagUpdateManySchema: z.ZodType<Prisma.RatingTagUpdateManyArgs> = z.object({ data: RatingTagUpdateManyMutationInputObjectSchema, where: RatingTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingTagUpdateManyArgs>;

export const RatingTagUpdateManyZodSchema = z.object({ data: RatingTagUpdateManyMutationInputObjectSchema, where: RatingTagWhereInputObjectSchema.optional() }).strict();