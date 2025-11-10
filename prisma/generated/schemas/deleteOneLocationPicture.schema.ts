import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureSelectObjectSchema as LocationPictureSelectObjectSchema } from './objects/LocationPictureSelect.schema';
import { LocationPictureIncludeObjectSchema as LocationPictureIncludeObjectSchema } from './objects/LocationPictureInclude.schema';
import { LocationPictureWhereUniqueInputObjectSchema as LocationPictureWhereUniqueInputObjectSchema } from './objects/LocationPictureWhereUniqueInput.schema';

export const LocationPictureDeleteOneSchema: z.ZodType<Prisma.LocationPictureDeleteArgs> = z.object({ select: LocationPictureSelectObjectSchema.optional(), include: LocationPictureIncludeObjectSchema.optional(), where: LocationPictureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LocationPictureDeleteArgs>;

export const LocationPictureDeleteOneZodSchema = z.object({ select: LocationPictureSelectObjectSchema.optional(), include: LocationPictureIncludeObjectSchema.optional(), where: LocationPictureWhereUniqueInputObjectSchema }).strict();