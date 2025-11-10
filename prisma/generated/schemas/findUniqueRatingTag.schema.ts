import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagSelectObjectSchema as RatingTagSelectObjectSchema } from './objects/RatingTagSelect.schema';
import { RatingTagIncludeObjectSchema as RatingTagIncludeObjectSchema } from './objects/RatingTagInclude.schema';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './objects/RatingTagWhereUniqueInput.schema';

export const RatingTagFindUniqueSchema: z.ZodType<Prisma.RatingTagFindUniqueArgs> = z.object({ select: RatingTagSelectObjectSchema.optional(), include: RatingTagIncludeObjectSchema.optional(), where: RatingTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RatingTagFindUniqueArgs>;

export const RatingTagFindUniqueZodSchema = z.object({ select: RatingTagSelectObjectSchema.optional(), include: RatingTagIncludeObjectSchema.optional(), where: RatingTagWhereUniqueInputObjectSchema }).strict();