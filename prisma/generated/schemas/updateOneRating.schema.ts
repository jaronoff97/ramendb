import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingSelectObjectSchema as RatingSelectObjectSchema } from './objects/RatingSelect.schema';
import { RatingIncludeObjectSchema as RatingIncludeObjectSchema } from './objects/RatingInclude.schema';
import { RatingUpdateInputObjectSchema as RatingUpdateInputObjectSchema } from './objects/RatingUpdateInput.schema';
import { RatingUncheckedUpdateInputObjectSchema as RatingUncheckedUpdateInputObjectSchema } from './objects/RatingUncheckedUpdateInput.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './objects/RatingWhereUniqueInput.schema';

export const RatingUpdateOneSchema: z.ZodType<Prisma.RatingUpdateArgs> = z.object({ select: RatingSelectObjectSchema.optional(), include: RatingIncludeObjectSchema.optional(), data: z.union([RatingUpdateInputObjectSchema, RatingUncheckedUpdateInputObjectSchema]), where: RatingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RatingUpdateArgs>;

export const RatingUpdateOneZodSchema = z.object({ select: RatingSelectObjectSchema.optional(), include: RatingIncludeObjectSchema.optional(), data: z.union([RatingUpdateInputObjectSchema, RatingUncheckedUpdateInputObjectSchema]), where: RatingWhereUniqueInputObjectSchema }).strict();