import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateWithoutPicturesInputObjectSchema as LocationCreateWithoutPicturesInputObjectSchema } from './LocationCreateWithoutPicturesInput.schema';
import { LocationUncheckedCreateWithoutPicturesInputObjectSchema as LocationUncheckedCreateWithoutPicturesInputObjectSchema } from './LocationUncheckedCreateWithoutPicturesInput.schema';
import { LocationCreateOrConnectWithoutPicturesInputObjectSchema as LocationCreateOrConnectWithoutPicturesInputObjectSchema } from './LocationCreateOrConnectWithoutPicturesInput.schema';
import { LocationUpsertWithoutPicturesInputObjectSchema as LocationUpsertWithoutPicturesInputObjectSchema } from './LocationUpsertWithoutPicturesInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateToOneWithWhereWithoutPicturesInputObjectSchema as LocationUpdateToOneWithWhereWithoutPicturesInputObjectSchema } from './LocationUpdateToOneWithWhereWithoutPicturesInput.schema';
import { LocationUpdateWithoutPicturesInputObjectSchema as LocationUpdateWithoutPicturesInputObjectSchema } from './LocationUpdateWithoutPicturesInput.schema';
import { LocationUncheckedUpdateWithoutPicturesInputObjectSchema as LocationUncheckedUpdateWithoutPicturesInputObjectSchema } from './LocationUncheckedUpdateWithoutPicturesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationCreateWithoutPicturesInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutPicturesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutPicturesInputObjectSchema).optional(),
  upsert: z.lazy(() => LocationUpsertWithoutPicturesInputObjectSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LocationUpdateToOneWithWhereWithoutPicturesInputObjectSchema), z.lazy(() => LocationUpdateWithoutPicturesInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutPicturesInputObjectSchema)]).optional()
}).strict();
export const LocationUpdateOneRequiredWithoutPicturesNestedInputObjectSchema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutPicturesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpdateOneRequiredWithoutPicturesNestedInput>;
export const LocationUpdateOneRequiredWithoutPicturesNestedInputObjectZodSchema = makeSchema();
