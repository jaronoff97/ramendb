import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureSelectObjectSchema as LocationPictureSelectObjectSchema } from './objects/LocationPictureSelect.schema';
import { LocationPictureUpdateManyMutationInputObjectSchema as LocationPictureUpdateManyMutationInputObjectSchema } from './objects/LocationPictureUpdateManyMutationInput.schema';
import { LocationPictureWhereInputObjectSchema as LocationPictureWhereInputObjectSchema } from './objects/LocationPictureWhereInput.schema';

export const LocationPictureUpdateManyAndReturnSchema: z.ZodType<Prisma.LocationPictureUpdateManyAndReturnArgs> = z.object({ select: LocationPictureSelectObjectSchema.optional(), data: LocationPictureUpdateManyMutationInputObjectSchema, where: LocationPictureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LocationPictureUpdateManyAndReturnArgs>;

export const LocationPictureUpdateManyAndReturnZodSchema = z.object({ select: LocationPictureSelectObjectSchema.optional(), data: LocationPictureUpdateManyMutationInputObjectSchema, where: LocationPictureWhereInputObjectSchema.optional() }).strict();