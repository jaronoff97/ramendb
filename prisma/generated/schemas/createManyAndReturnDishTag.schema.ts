import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagSelectObjectSchema as DishTagSelectObjectSchema } from './objects/DishTagSelect.schema';
import { DishTagCreateManyInputObjectSchema as DishTagCreateManyInputObjectSchema } from './objects/DishTagCreateManyInput.schema';

export const DishTagCreateManyAndReturnSchema: z.ZodType<Prisma.DishTagCreateManyAndReturnArgs> = z.object({ select: DishTagSelectObjectSchema.optional(), data: z.union([ DishTagCreateManyInputObjectSchema, z.array(DishTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DishTagCreateManyAndReturnArgs>;

export const DishTagCreateManyAndReturnZodSchema = z.object({ select: DishTagSelectObjectSchema.optional(), data: z.union([ DishTagCreateManyInputObjectSchema, z.array(DishTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();