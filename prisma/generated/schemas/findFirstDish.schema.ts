import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishIncludeObjectSchema as DishIncludeObjectSchema } from './objects/DishInclude.schema';
import { DishOrderByWithRelationInputObjectSchema as DishOrderByWithRelationInputObjectSchema } from './objects/DishOrderByWithRelationInput.schema';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './objects/DishWhereInput.schema';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './objects/DishWhereUniqueInput.schema';
import { DishScalarFieldEnumSchema } from './enums/DishScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DishFindFirstSelectSchema: z.ZodType<Prisma.DishSelect> = z.object({
    id: z.boolean().optional(),
    locationId: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    location: z.boolean().optional(),
    tags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DishSelect>;

export const DishFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    locationId: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    location: z.boolean().optional(),
    tags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const DishFindFirstSchema: z.ZodType<Prisma.DishFindFirstArgs> = z.object({ select: DishFindFirstSelectSchema.optional(), include: z.lazy(() => DishIncludeObjectSchema.optional()), orderBy: z.union([DishOrderByWithRelationInputObjectSchema, DishOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishWhereInputObjectSchema.optional(), cursor: DishWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DishScalarFieldEnumSchema, DishScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DishFindFirstArgs>;

export const DishFindFirstZodSchema = z.object({ select: DishFindFirstSelectSchema.optional(), include: z.lazy(() => DishIncludeObjectSchema.optional()), orderBy: z.union([DishOrderByWithRelationInputObjectSchema, DishOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishWhereInputObjectSchema.optional(), cursor: DishWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DishScalarFieldEnumSchema, DishScalarFieldEnumSchema.array()]).optional() }).strict();