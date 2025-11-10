import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingSelectObjectSchema as RatingSelectObjectSchema } from './objects/RatingSelect.schema';
import { RatingIncludeObjectSchema as RatingIncludeObjectSchema } from './objects/RatingInclude.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './objects/RatingWhereUniqueInput.schema';
import { RatingCreateInputObjectSchema as RatingCreateInputObjectSchema } from './objects/RatingCreateInput.schema';
import { RatingUncheckedCreateInputObjectSchema as RatingUncheckedCreateInputObjectSchema } from './objects/RatingUncheckedCreateInput.schema';
import { RatingUpdateInputObjectSchema as RatingUpdateInputObjectSchema } from './objects/RatingUpdateInput.schema';
import { RatingUncheckedUpdateInputObjectSchema as RatingUncheckedUpdateInputObjectSchema } from './objects/RatingUncheckedUpdateInput.schema';

export const RatingUpsertOneSchema: z.ZodType<Prisma.RatingUpsertArgs> = z.object({ select: RatingSelectObjectSchema.optional(), include: RatingIncludeObjectSchema.optional(), where: RatingWhereUniqueInputObjectSchema, create: z.union([ RatingCreateInputObjectSchema, RatingUncheckedCreateInputObjectSchema ]), update: z.union([ RatingUpdateInputObjectSchema, RatingUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RatingUpsertArgs>;

export const RatingUpsertOneZodSchema = z.object({ select: RatingSelectObjectSchema.optional(), include: RatingIncludeObjectSchema.optional(), where: RatingWhereUniqueInputObjectSchema, create: z.union([ RatingCreateInputObjectSchema, RatingUncheckedCreateInputObjectSchema ]), update: z.union([ RatingUpdateInputObjectSchema, RatingUncheckedUpdateInputObjectSchema ]) }).strict();