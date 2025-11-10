import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagOrderByWithRelationInputObjectSchema as LocationTagOrderByWithRelationInputObjectSchema } from './objects/LocationTagOrderByWithRelationInput.schema';
import { LocationTagWhereInputObjectSchema as LocationTagWhereInputObjectSchema } from './objects/LocationTagWhereInput.schema';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './objects/LocationTagWhereUniqueInput.schema';
import { LocationTagCountAggregateInputObjectSchema as LocationTagCountAggregateInputObjectSchema } from './objects/LocationTagCountAggregateInput.schema';

export const LocationTagCountSchema: z.ZodType<Prisma.LocationTagCountArgs> = z.object({ orderBy: z.union([LocationTagOrderByWithRelationInputObjectSchema, LocationTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationTagWhereInputObjectSchema.optional(), cursor: LocationTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LocationTagCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LocationTagCountArgs>;

export const LocationTagCountZodSchema = z.object({ orderBy: z.union([LocationTagOrderByWithRelationInputObjectSchema, LocationTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationTagWhereInputObjectSchema.optional(), cursor: LocationTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LocationTagCountAggregateInputObjectSchema ]).optional() }).strict();