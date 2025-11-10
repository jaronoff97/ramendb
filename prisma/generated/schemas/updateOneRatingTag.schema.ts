import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagSelectObjectSchema as RatingTagSelectObjectSchema } from './objects/RatingTagSelect.schema';
import { RatingTagIncludeObjectSchema as RatingTagIncludeObjectSchema } from './objects/RatingTagInclude.schema';
import { RatingTagUpdateInputObjectSchema as RatingTagUpdateInputObjectSchema } from './objects/RatingTagUpdateInput.schema';
import { RatingTagUncheckedUpdateInputObjectSchema as RatingTagUncheckedUpdateInputObjectSchema } from './objects/RatingTagUncheckedUpdateInput.schema';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './objects/RatingTagWhereUniqueInput.schema';

export const RatingTagUpdateOneSchema: z.ZodType<Prisma.RatingTagUpdateArgs> = z.object({ select: RatingTagSelectObjectSchema.optional(), include: RatingTagIncludeObjectSchema.optional(), data: z.union([RatingTagUpdateInputObjectSchema, RatingTagUncheckedUpdateInputObjectSchema]), where: RatingTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RatingTagUpdateArgs>;

export const RatingTagUpdateOneZodSchema = z.object({ select: RatingTagSelectObjectSchema.optional(), include: RatingTagIncludeObjectSchema.optional(), data: z.union([RatingTagUpdateInputObjectSchema, RatingTagUncheckedUpdateInputObjectSchema]), where: RatingTagWhereUniqueInputObjectSchema }).strict();