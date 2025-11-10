import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureWhereInputObjectSchema as LocationPictureWhereInputObjectSchema } from './objects/LocationPictureWhereInput.schema';

export const LocationPictureDeleteManySchema: z.ZodType<Prisma.LocationPictureDeleteManyArgs> = z.object({ where: LocationPictureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LocationPictureDeleteManyArgs>;

export const LocationPictureDeleteManyZodSchema = z.object({ where: LocationPictureWhereInputObjectSchema.optional() }).strict();