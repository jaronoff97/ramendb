import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { LocationUpdateWithoutPicturesInputObjectSchema as LocationUpdateWithoutPicturesInputObjectSchema } from './LocationUpdateWithoutPicturesInput.schema';
import { LocationUncheckedUpdateWithoutPicturesInputObjectSchema as LocationUncheckedUpdateWithoutPicturesInputObjectSchema } from './LocationUncheckedUpdateWithoutPicturesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LocationUpdateWithoutPicturesInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutPicturesInputObjectSchema)])
}).strict();
export const LocationUpdateToOneWithWhereWithoutPicturesInputObjectSchema: z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutPicturesInput>;
export const LocationUpdateToOneWithWhereWithoutPicturesInputObjectZodSchema = makeSchema();
