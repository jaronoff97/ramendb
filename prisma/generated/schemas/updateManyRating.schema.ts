import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingUpdateManyMutationInputObjectSchema as RatingUpdateManyMutationInputObjectSchema } from './objects/RatingUpdateManyMutationInput.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './objects/RatingWhereInput.schema';

export const RatingUpdateManySchema: z.ZodType<Prisma.RatingUpdateManyArgs> = z.object({ data: RatingUpdateManyMutationInputObjectSchema, where: RatingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingUpdateManyArgs>;

export const RatingUpdateManyZodSchema = z.object({ data: RatingUpdateManyMutationInputObjectSchema, where: RatingWhereInputObjectSchema.optional() }).strict();