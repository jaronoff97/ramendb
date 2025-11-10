import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingSelectObjectSchema as RatingSelectObjectSchema } from './objects/RatingSelect.schema';
import { RatingIncludeObjectSchema as RatingIncludeObjectSchema } from './objects/RatingInclude.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './objects/RatingWhereUniqueInput.schema';

export const RatingFindUniqueOrThrowSchema: z.ZodType<Prisma.RatingFindUniqueOrThrowArgs> = z.object({ select: RatingSelectObjectSchema.optional(), include: RatingIncludeObjectSchema.optional(), where: RatingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RatingFindUniqueOrThrowArgs>;

export const RatingFindUniqueOrThrowZodSchema = z.object({ select: RatingSelectObjectSchema.optional(), include: RatingIncludeObjectSchema.optional(), where: RatingWhereUniqueInputObjectSchema }).strict();