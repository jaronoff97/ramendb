import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagSelectObjectSchema as DishTagSelectObjectSchema } from './objects/DishTagSelect.schema';
import { DishTagIncludeObjectSchema as DishTagIncludeObjectSchema } from './objects/DishTagInclude.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './objects/DishTagWhereUniqueInput.schema';
import { DishTagCreateInputObjectSchema as DishTagCreateInputObjectSchema } from './objects/DishTagCreateInput.schema';
import { DishTagUncheckedCreateInputObjectSchema as DishTagUncheckedCreateInputObjectSchema } from './objects/DishTagUncheckedCreateInput.schema';
import { DishTagUpdateInputObjectSchema as DishTagUpdateInputObjectSchema } from './objects/DishTagUpdateInput.schema';
import { DishTagUncheckedUpdateInputObjectSchema as DishTagUncheckedUpdateInputObjectSchema } from './objects/DishTagUncheckedUpdateInput.schema';

export const DishTagUpsertOneSchema: z.ZodType<Prisma.DishTagUpsertArgs> = z.object({ select: DishTagSelectObjectSchema.optional(), include: DishTagIncludeObjectSchema.optional(), where: DishTagWhereUniqueInputObjectSchema, create: z.union([ DishTagCreateInputObjectSchema, DishTagUncheckedCreateInputObjectSchema ]), update: z.union([ DishTagUpdateInputObjectSchema, DishTagUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DishTagUpsertArgs>;

export const DishTagUpsertOneZodSchema = z.object({ select: DishTagSelectObjectSchema.optional(), include: DishTagIncludeObjectSchema.optional(), where: DishTagWhereUniqueInputObjectSchema, create: z.union([ DishTagCreateInputObjectSchema, DishTagUncheckedCreateInputObjectSchema ]), update: z.union([ DishTagUpdateInputObjectSchema, DishTagUncheckedUpdateInputObjectSchema ]) }).strict();