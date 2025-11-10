import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagSelectObjectSchema as RatingTagSelectObjectSchema } from './objects/RatingTagSelect.schema';
import { RatingTagIncludeObjectSchema as RatingTagIncludeObjectSchema } from './objects/RatingTagInclude.schema';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './objects/RatingTagWhereUniqueInput.schema';
import { RatingTagCreateInputObjectSchema as RatingTagCreateInputObjectSchema } from './objects/RatingTagCreateInput.schema';
import { RatingTagUncheckedCreateInputObjectSchema as RatingTagUncheckedCreateInputObjectSchema } from './objects/RatingTagUncheckedCreateInput.schema';
import { RatingTagUpdateInputObjectSchema as RatingTagUpdateInputObjectSchema } from './objects/RatingTagUpdateInput.schema';
import { RatingTagUncheckedUpdateInputObjectSchema as RatingTagUncheckedUpdateInputObjectSchema } from './objects/RatingTagUncheckedUpdateInput.schema';

export const RatingTagUpsertOneSchema: z.ZodType<Prisma.RatingTagUpsertArgs> = z.object({ select: RatingTagSelectObjectSchema.optional(), include: RatingTagIncludeObjectSchema.optional(), where: RatingTagWhereUniqueInputObjectSchema, create: z.union([ RatingTagCreateInputObjectSchema, RatingTagUncheckedCreateInputObjectSchema ]), update: z.union([ RatingTagUpdateInputObjectSchema, RatingTagUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RatingTagUpsertArgs>;

export const RatingTagUpsertOneZodSchema = z.object({ select: RatingTagSelectObjectSchema.optional(), include: RatingTagIncludeObjectSchema.optional(), where: RatingTagWhereUniqueInputObjectSchema, create: z.union([ RatingTagCreateInputObjectSchema, RatingTagUncheckedCreateInputObjectSchema ]), update: z.union([ RatingTagUpdateInputObjectSchema, RatingTagUncheckedUpdateInputObjectSchema ]) }).strict();