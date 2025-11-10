import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagIncludeObjectSchema as DishTagIncludeObjectSchema } from './objects/DishTagInclude.schema';
import { DishTagOrderByWithRelationInputObjectSchema as DishTagOrderByWithRelationInputObjectSchema } from './objects/DishTagOrderByWithRelationInput.schema';
import { DishTagWhereInputObjectSchema as DishTagWhereInputObjectSchema } from './objects/DishTagWhereInput.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './objects/DishTagWhereUniqueInput.schema';
import { DishTagScalarFieldEnumSchema } from './enums/DishTagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DishTagFindManySelectSchema: z.ZodType<Prisma.DishTagSelect> = z.object({
    dishId: z.boolean().optional(),
    tagId: z.boolean().optional(),
    dish: z.boolean().optional(),
    tag: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DishTagSelect>;

export const DishTagFindManySelectZodSchema = z.object({
    dishId: z.boolean().optional(),
    tagId: z.boolean().optional(),
    dish: z.boolean().optional(),
    tag: z.boolean().optional()
  }).strict();

export const DishTagFindManySchema: z.ZodType<Prisma.DishTagFindManyArgs> = z.object({ select: DishTagFindManySelectSchema.optional(), include: z.lazy(() => DishTagIncludeObjectSchema.optional()), orderBy: z.union([DishTagOrderByWithRelationInputObjectSchema, DishTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishTagWhereInputObjectSchema.optional(), cursor: DishTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DishTagScalarFieldEnumSchema, DishTagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DishTagFindManyArgs>;

export const DishTagFindManyZodSchema = z.object({ select: DishTagFindManySelectSchema.optional(), include: z.lazy(() => DishTagIncludeObjectSchema.optional()), orderBy: z.union([DishTagOrderByWithRelationInputObjectSchema, DishTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishTagWhereInputObjectSchema.optional(), cursor: DishTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DishTagScalarFieldEnumSchema, DishTagScalarFieldEnumSchema.array()]).optional() }).strict();