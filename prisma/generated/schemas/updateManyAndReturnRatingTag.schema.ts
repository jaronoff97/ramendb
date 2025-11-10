import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagSelectObjectSchema as RatingTagSelectObjectSchema } from './objects/RatingTagSelect.schema';
import { RatingTagUpdateManyMutationInputObjectSchema as RatingTagUpdateManyMutationInputObjectSchema } from './objects/RatingTagUpdateManyMutationInput.schema';
import { RatingTagWhereInputObjectSchema as RatingTagWhereInputObjectSchema } from './objects/RatingTagWhereInput.schema';

export const RatingTagUpdateManyAndReturnSchema: z.ZodType<Prisma.RatingTagUpdateManyAndReturnArgs> = z.object({ select: RatingTagSelectObjectSchema.optional(), data: RatingTagUpdateManyMutationInputObjectSchema, where: RatingTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingTagUpdateManyAndReturnArgs>;

export const RatingTagUpdateManyAndReturnZodSchema = z.object({ select: RatingTagSelectObjectSchema.optional(), data: RatingTagUpdateManyMutationInputObjectSchema, where: RatingTagWhereInputObjectSchema.optional() }).strict();