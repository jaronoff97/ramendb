import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagSelectObjectSchema as DishTagSelectObjectSchema } from './objects/DishTagSelect.schema';
import { DishTagIncludeObjectSchema as DishTagIncludeObjectSchema } from './objects/DishTagInclude.schema';
import { DishTagCreateInputObjectSchema as DishTagCreateInputObjectSchema } from './objects/DishTagCreateInput.schema';
import { DishTagUncheckedCreateInputObjectSchema as DishTagUncheckedCreateInputObjectSchema } from './objects/DishTagUncheckedCreateInput.schema';

export const DishTagCreateOneSchema: z.ZodType<Prisma.DishTagCreateArgs> = z.object({ select: DishTagSelectObjectSchema.optional(), include: DishTagIncludeObjectSchema.optional(), data: z.union([DishTagCreateInputObjectSchema, DishTagUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DishTagCreateArgs>;

export const DishTagCreateOneZodSchema = z.object({ select: DishTagSelectObjectSchema.optional(), include: DishTagIncludeObjectSchema.optional(), data: z.union([DishTagCreateInputObjectSchema, DishTagUncheckedCreateInputObjectSchema]) }).strict();