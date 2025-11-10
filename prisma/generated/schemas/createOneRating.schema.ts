import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingSelectObjectSchema as RatingSelectObjectSchema } from './objects/RatingSelect.schema';
import { RatingIncludeObjectSchema as RatingIncludeObjectSchema } from './objects/RatingInclude.schema';
import { RatingCreateInputObjectSchema as RatingCreateInputObjectSchema } from './objects/RatingCreateInput.schema';
import { RatingUncheckedCreateInputObjectSchema as RatingUncheckedCreateInputObjectSchema } from './objects/RatingUncheckedCreateInput.schema';

export const RatingCreateOneSchema: z.ZodType<Prisma.RatingCreateArgs> = z.object({ select: RatingSelectObjectSchema.optional(), include: RatingIncludeObjectSchema.optional(), data: z.union([RatingCreateInputObjectSchema, RatingUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RatingCreateArgs>;

export const RatingCreateOneZodSchema = z.object({ select: RatingSelectObjectSchema.optional(), include: RatingIncludeObjectSchema.optional(), data: z.union([RatingCreateInputObjectSchema, RatingUncheckedCreateInputObjectSchema]) }).strict();