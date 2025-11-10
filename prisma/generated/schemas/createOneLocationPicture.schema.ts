import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureSelectObjectSchema as LocationPictureSelectObjectSchema } from './objects/LocationPictureSelect.schema';
import { LocationPictureIncludeObjectSchema as LocationPictureIncludeObjectSchema } from './objects/LocationPictureInclude.schema';
import { LocationPictureCreateInputObjectSchema as LocationPictureCreateInputObjectSchema } from './objects/LocationPictureCreateInput.schema';
import { LocationPictureUncheckedCreateInputObjectSchema as LocationPictureUncheckedCreateInputObjectSchema } from './objects/LocationPictureUncheckedCreateInput.schema';

export const LocationPictureCreateOneSchema: z.ZodType<Prisma.LocationPictureCreateArgs> = z.object({ select: LocationPictureSelectObjectSchema.optional(), include: LocationPictureIncludeObjectSchema.optional(), data: z.union([LocationPictureCreateInputObjectSchema, LocationPictureUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LocationPictureCreateArgs>;

export const LocationPictureCreateOneZodSchema = z.object({ select: LocationPictureSelectObjectSchema.optional(), include: LocationPictureIncludeObjectSchema.optional(), data: z.union([LocationPictureCreateInputObjectSchema, LocationPictureUncheckedCreateInputObjectSchema]) }).strict();