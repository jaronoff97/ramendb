import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishSelectObjectSchema as DishSelectObjectSchema } from './objects/DishSelect.schema';
import { DishCreateManyInputObjectSchema as DishCreateManyInputObjectSchema } from './objects/DishCreateManyInput.schema';

export const DishCreateManyAndReturnSchema: z.ZodType<Prisma.DishCreateManyAndReturnArgs> = z.object({ select: DishSelectObjectSchema.optional(), data: z.union([ DishCreateManyInputObjectSchema, z.array(DishCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DishCreateManyAndReturnArgs>;

export const DishCreateManyAndReturnZodSchema = z.object({ select: DishSelectObjectSchema.optional(), data: z.union([ DishCreateManyInputObjectSchema, z.array(DishCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();