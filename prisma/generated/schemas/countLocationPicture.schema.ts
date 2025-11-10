import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureOrderByWithRelationInputObjectSchema as LocationPictureOrderByWithRelationInputObjectSchema } from './objects/LocationPictureOrderByWithRelationInput.schema';
import { LocationPictureWhereInputObjectSchema as LocationPictureWhereInputObjectSchema } from './objects/LocationPictureWhereInput.schema';
import { LocationPictureWhereUniqueInputObjectSchema as LocationPictureWhereUniqueInputObjectSchema } from './objects/LocationPictureWhereUniqueInput.schema';
import { LocationPictureCountAggregateInputObjectSchema as LocationPictureCountAggregateInputObjectSchema } from './objects/LocationPictureCountAggregateInput.schema';

export const LocationPictureCountSchema: z.ZodType<Prisma.LocationPictureCountArgs> = z.object({ orderBy: z.union([LocationPictureOrderByWithRelationInputObjectSchema, LocationPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationPictureWhereInputObjectSchema.optional(), cursor: LocationPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LocationPictureCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LocationPictureCountArgs>;

export const LocationPictureCountZodSchema = z.object({ orderBy: z.union([LocationPictureOrderByWithRelationInputObjectSchema, LocationPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationPictureWhereInputObjectSchema.optional(), cursor: LocationPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LocationPictureCountAggregateInputObjectSchema ]).optional() }).strict();