import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagSelectObjectSchema as RatingTagSelectObjectSchema } from './objects/RatingTagSelect.schema';
import { RatingTagIncludeObjectSchema as RatingTagIncludeObjectSchema } from './objects/RatingTagInclude.schema';
import { RatingTagCreateInputObjectSchema as RatingTagCreateInputObjectSchema } from './objects/RatingTagCreateInput.schema';
import { RatingTagUncheckedCreateInputObjectSchema as RatingTagUncheckedCreateInputObjectSchema } from './objects/RatingTagUncheckedCreateInput.schema';

export const RatingTagCreateOneSchema: z.ZodType<Prisma.RatingTagCreateArgs> = z.object({ select: RatingTagSelectObjectSchema.optional(), include: RatingTagIncludeObjectSchema.optional(), data: z.union([RatingTagCreateInputObjectSchema, RatingTagUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RatingTagCreateArgs>;

export const RatingTagCreateOneZodSchema = z.object({ select: RatingTagSelectObjectSchema.optional(), include: RatingTagIncludeObjectSchema.optional(), data: z.union([RatingTagCreateInputObjectSchema, RatingTagUncheckedCreateInputObjectSchema]) }).strict();