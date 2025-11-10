import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureSelectObjectSchema as LocationPictureSelectObjectSchema } from './objects/LocationPictureSelect.schema';
import { LocationPictureIncludeObjectSchema as LocationPictureIncludeObjectSchema } from './objects/LocationPictureInclude.schema';
import { LocationPictureWhereUniqueInputObjectSchema as LocationPictureWhereUniqueInputObjectSchema } from './objects/LocationPictureWhereUniqueInput.schema';
import { LocationPictureCreateInputObjectSchema as LocationPictureCreateInputObjectSchema } from './objects/LocationPictureCreateInput.schema';
import { LocationPictureUncheckedCreateInputObjectSchema as LocationPictureUncheckedCreateInputObjectSchema } from './objects/LocationPictureUncheckedCreateInput.schema';
import { LocationPictureUpdateInputObjectSchema as LocationPictureUpdateInputObjectSchema } from './objects/LocationPictureUpdateInput.schema';
import { LocationPictureUncheckedUpdateInputObjectSchema as LocationPictureUncheckedUpdateInputObjectSchema } from './objects/LocationPictureUncheckedUpdateInput.schema';

export const LocationPictureUpsertOneSchema: z.ZodType<Prisma.LocationPictureUpsertArgs> = z.object({ select: LocationPictureSelectObjectSchema.optional(), include: LocationPictureIncludeObjectSchema.optional(), where: LocationPictureWhereUniqueInputObjectSchema, create: z.union([ LocationPictureCreateInputObjectSchema, LocationPictureUncheckedCreateInputObjectSchema ]), update: z.union([ LocationPictureUpdateInputObjectSchema, LocationPictureUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LocationPictureUpsertArgs>;

export const LocationPictureUpsertOneZodSchema = z.object({ select: LocationPictureSelectObjectSchema.optional(), include: LocationPictureIncludeObjectSchema.optional(), where: LocationPictureWhereUniqueInputObjectSchema, create: z.union([ LocationPictureCreateInputObjectSchema, LocationPictureUncheckedCreateInputObjectSchema ]), update: z.union([ LocationPictureUpdateInputObjectSchema, LocationPictureUncheckedUpdateInputObjectSchema ]) }).strict();