import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagCreateManyInputObjectSchema as DishTagCreateManyInputObjectSchema } from './objects/DishTagCreateManyInput.schema';

export const DishTagCreateManySchema: z.ZodType<Prisma.DishTagCreateManyArgs> = z.object({ data: z.union([ DishTagCreateManyInputObjectSchema, z.array(DishTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DishTagCreateManyArgs>;

export const DishTagCreateManyZodSchema = z.object({ data: z.union([ DishTagCreateManyInputObjectSchema, z.array(DishTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();