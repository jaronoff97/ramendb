import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingSelectObjectSchema as RatingSelectObjectSchema } from './objects/RatingSelect.schema';
import { RatingUpdateManyMutationInputObjectSchema as RatingUpdateManyMutationInputObjectSchema } from './objects/RatingUpdateManyMutationInput.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './objects/RatingWhereInput.schema';

export const RatingUpdateManyAndReturnSchema: z.ZodType<Prisma.RatingUpdateManyAndReturnArgs> = z.object({ select: RatingSelectObjectSchema.optional(), data: RatingUpdateManyMutationInputObjectSchema, where: RatingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingUpdateManyAndReturnArgs>;

export const RatingUpdateManyAndReturnZodSchema = z.object({ select: RatingSelectObjectSchema.optional(), data: RatingUpdateManyMutationInputObjectSchema, where: RatingWhereInputObjectSchema.optional() }).strict();