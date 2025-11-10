import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationUpdateWithoutPicturesInputObjectSchema as LocationUpdateWithoutPicturesInputObjectSchema } from './LocationUpdateWithoutPicturesInput.schema';
import { LocationUncheckedUpdateWithoutPicturesInputObjectSchema as LocationUncheckedUpdateWithoutPicturesInputObjectSchema } from './LocationUncheckedUpdateWithoutPicturesInput.schema';
import { LocationCreateWithoutPicturesInputObjectSchema as LocationCreateWithoutPicturesInputObjectSchema } from './LocationCreateWithoutPicturesInput.schema';
import { LocationUncheckedCreateWithoutPicturesInputObjectSchema as LocationUncheckedCreateWithoutPicturesInputObjectSchema } from './LocationUncheckedCreateWithoutPicturesInput.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LocationUpdateWithoutPicturesInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutPicturesInputObjectSchema)]),
  create: z.union([z.lazy(() => LocationCreateWithoutPicturesInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutPicturesInputObjectSchema)]),
  where: z.lazy(() => LocationWhereInputObjectSchema).optional()
}).strict();
export const LocationUpsertWithoutPicturesInputObjectSchema: z.ZodType<Prisma.LocationUpsertWithoutPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpsertWithoutPicturesInput>;
export const LocationUpsertWithoutPicturesInputObjectZodSchema = makeSchema();
