import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureSelectObjectSchema as LocationPictureSelectObjectSchema } from './objects/LocationPictureSelect.schema';
import { LocationPictureIncludeObjectSchema as LocationPictureIncludeObjectSchema } from './objects/LocationPictureInclude.schema';
import { LocationPictureUpdateInputObjectSchema as LocationPictureUpdateInputObjectSchema } from './objects/LocationPictureUpdateInput.schema';
import { LocationPictureUncheckedUpdateInputObjectSchema as LocationPictureUncheckedUpdateInputObjectSchema } from './objects/LocationPictureUncheckedUpdateInput.schema';
import { LocationPictureWhereUniqueInputObjectSchema as LocationPictureWhereUniqueInputObjectSchema } from './objects/LocationPictureWhereUniqueInput.schema';

export const LocationPictureUpdateOneSchema: z.ZodType<Prisma.LocationPictureUpdateArgs> = z.object({ select: LocationPictureSelectObjectSchema.optional(), include: LocationPictureIncludeObjectSchema.optional(), data: z.union([LocationPictureUpdateInputObjectSchema, LocationPictureUncheckedUpdateInputObjectSchema]), where: LocationPictureWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LocationPictureUpdateArgs>;

export const LocationPictureUpdateOneZodSchema = z.object({ select: LocationPictureSelectObjectSchema.optional(), include: LocationPictureIncludeObjectSchema.optional(), data: z.union([LocationPictureUpdateInputObjectSchema, LocationPictureUncheckedUpdateInputObjectSchema]), where: LocationPictureWhereUniqueInputObjectSchema }).strict();