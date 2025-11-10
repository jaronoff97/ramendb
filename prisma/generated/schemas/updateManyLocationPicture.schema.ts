import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureUpdateManyMutationInputObjectSchema as LocationPictureUpdateManyMutationInputObjectSchema } from './objects/LocationPictureUpdateManyMutationInput.schema';
import { LocationPictureWhereInputObjectSchema as LocationPictureWhereInputObjectSchema } from './objects/LocationPictureWhereInput.schema';

export const LocationPictureUpdateManySchema: z.ZodType<Prisma.LocationPictureUpdateManyArgs> = z.object({ data: LocationPictureUpdateManyMutationInputObjectSchema, where: LocationPictureWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LocationPictureUpdateManyArgs>;

export const LocationPictureUpdateManyZodSchema = z.object({ data: LocationPictureUpdateManyMutationInputObjectSchema, where: LocationPictureWhereInputObjectSchema.optional() }).strict();