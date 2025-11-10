import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureOrderByWithRelationInputObjectSchema as RatingPictureOrderByWithRelationInputObjectSchema } from './objects/RatingPictureOrderByWithRelationInput.schema';
import { RatingPictureWhereInputObjectSchema as RatingPictureWhereInputObjectSchema } from './objects/RatingPictureWhereInput.schema';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './objects/RatingPictureWhereUniqueInput.schema';
import { RatingPictureCountAggregateInputObjectSchema as RatingPictureCountAggregateInputObjectSchema } from './objects/RatingPictureCountAggregateInput.schema';

export const RatingPictureCountSchema: z.ZodType<Prisma.RatingPictureCountArgs> = z.object({ orderBy: z.union([RatingPictureOrderByWithRelationInputObjectSchema, RatingPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingPictureWhereInputObjectSchema.optional(), cursor: RatingPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RatingPictureCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RatingPictureCountArgs>;

export const RatingPictureCountZodSchema = z.object({ orderBy: z.union([RatingPictureOrderByWithRelationInputObjectSchema, RatingPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingPictureWhereInputObjectSchema.optional(), cursor: RatingPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RatingPictureCountAggregateInputObjectSchema ]).optional() }).strict();