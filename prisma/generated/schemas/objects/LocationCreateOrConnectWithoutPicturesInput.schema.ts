import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutPicturesInputObjectSchema as LocationCreateWithoutPicturesInputObjectSchema } from './LocationCreateWithoutPicturesInput.schema';
import { LocationUncheckedCreateWithoutPicturesInputObjectSchema as LocationUncheckedCreateWithoutPicturesInputObjectSchema } from './LocationUncheckedCreateWithoutPicturesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LocationCreateWithoutPicturesInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutPicturesInputObjectSchema)])
}).strict();
export const LocationCreateOrConnectWithoutPicturesInputObjectSchema: z.ZodType<Prisma.LocationCreateOrConnectWithoutPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateOrConnectWithoutPicturesInput>;
export const LocationCreateOrConnectWithoutPicturesInputObjectZodSchema = makeSchema();
