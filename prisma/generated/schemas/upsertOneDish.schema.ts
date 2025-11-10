import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishSelectObjectSchema as DishSelectObjectSchema } from './objects/DishSelect.schema';
import { DishIncludeObjectSchema as DishIncludeObjectSchema } from './objects/DishInclude.schema';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './objects/DishWhereUniqueInput.schema';
import { DishCreateInputObjectSchema as DishCreateInputObjectSchema } from './objects/DishCreateInput.schema';
import { DishUncheckedCreateInputObjectSchema as DishUncheckedCreateInputObjectSchema } from './objects/DishUncheckedCreateInput.schema';
import { DishUpdateInputObjectSchema as DishUpdateInputObjectSchema } from './objects/DishUpdateInput.schema';
import { DishUncheckedUpdateInputObjectSchema as DishUncheckedUpdateInputObjectSchema } from './objects/DishUncheckedUpdateInput.schema';

export const DishUpsertOneSchema: z.ZodType<Prisma.DishUpsertArgs> = z.object({ select: DishSelectObjectSchema.optional(), include: DishIncludeObjectSchema.optional(), where: DishWhereUniqueInputObjectSchema, create: z.union([ DishCreateInputObjectSchema, DishUncheckedCreateInputObjectSchema ]), update: z.union([ DishUpdateInputObjectSchema, DishUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DishUpsertArgs>;

export const DishUpsertOneZodSchema = z.object({ select: DishSelectObjectSchema.optional(), include: DishIncludeObjectSchema.optional(), where: DishWhereUniqueInputObjectSchema, create: z.union([ DishCreateInputObjectSchema, DishUncheckedCreateInputObjectSchema ]), update: z.union([ DishUpdateInputObjectSchema, DishUncheckedUpdateInputObjectSchema ]) }).strict();