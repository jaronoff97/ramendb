import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureIncludeObjectSchema as LocationPictureIncludeObjectSchema } from './objects/LocationPictureInclude.schema';
import { LocationPictureOrderByWithRelationInputObjectSchema as LocationPictureOrderByWithRelationInputObjectSchema } from './objects/LocationPictureOrderByWithRelationInput.schema';
import { LocationPictureWhereInputObjectSchema as LocationPictureWhereInputObjectSchema } from './objects/LocationPictureWhereInput.schema';
import { LocationPictureWhereUniqueInputObjectSchema as LocationPictureWhereUniqueInputObjectSchema } from './objects/LocationPictureWhereUniqueInput.schema';
import { LocationPictureScalarFieldEnumSchema } from './enums/LocationPictureScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LocationPictureFindManySelectSchema: z.ZodType<Prisma.LocationPictureSelect> = z.object({
    id: z.boolean().optional(),
    locationId: z.boolean().optional(),
    url: z.boolean().optional(),
    caption: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    location: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LocationPictureSelect>;

export const LocationPictureFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    locationId: z.boolean().optional(),
    url: z.boolean().optional(),
    caption: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    location: z.boolean().optional()
  }).strict();

export const LocationPictureFindManySchema: z.ZodType<Prisma.LocationPictureFindManyArgs> = z.object({ select: LocationPictureFindManySelectSchema.optional(), include: z.lazy(() => LocationPictureIncludeObjectSchema.optional()), orderBy: z.union([LocationPictureOrderByWithRelationInputObjectSchema, LocationPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationPictureWhereInputObjectSchema.optional(), cursor: LocationPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LocationPictureScalarFieldEnumSchema, LocationPictureScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LocationPictureFindManyArgs>;

export const LocationPictureFindManyZodSchema = z.object({ select: LocationPictureFindManySelectSchema.optional(), include: z.lazy(() => LocationPictureIncludeObjectSchema.optional()), orderBy: z.union([LocationPictureOrderByWithRelationInputObjectSchema, LocationPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationPictureWhereInputObjectSchema.optional(), cursor: LocationPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LocationPictureScalarFieldEnumSchema, LocationPictureScalarFieldEnumSchema.array()]).optional() }).strict();