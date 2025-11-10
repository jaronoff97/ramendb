import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishSelectObjectSchema as DishSelectObjectSchema } from './objects/DishSelect.schema';
import { DishIncludeObjectSchema as DishIncludeObjectSchema } from './objects/DishInclude.schema';
import { DishCreateInputObjectSchema as DishCreateInputObjectSchema } from './objects/DishCreateInput.schema';
import { DishUncheckedCreateInputObjectSchema as DishUncheckedCreateInputObjectSchema } from './objects/DishUncheckedCreateInput.schema';

export const DishCreateOneSchema: z.ZodType<Prisma.DishCreateArgs> = z.object({ select: DishSelectObjectSchema.optional(), include: DishIncludeObjectSchema.optional(), data: z.union([DishCreateInputObjectSchema, DishUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DishCreateArgs>;

export const DishCreateOneZodSchema = z.object({ select: DishSelectObjectSchema.optional(), include: DishIncludeObjectSchema.optional(), data: z.union([DishCreateInputObjectSchema, DishUncheckedCreateInputObjectSchema]) }).strict();