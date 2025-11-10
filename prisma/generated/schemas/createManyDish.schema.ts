import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishCreateManyInputObjectSchema as DishCreateManyInputObjectSchema } from './objects/DishCreateManyInput.schema';

export const DishCreateManySchema: z.ZodType<Prisma.DishCreateManyArgs> = z.object({ data: z.union([ DishCreateManyInputObjectSchema, z.array(DishCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DishCreateManyArgs>;

export const DishCreateManyZodSchema = z.object({ data: z.union([ DishCreateManyInputObjectSchema, z.array(DishCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();