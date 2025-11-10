import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateWithoutPicturesInputObjectSchema as LocationCreateWithoutPicturesInputObjectSchema } from './LocationCreateWithoutPicturesInput.schema';
import { LocationUncheckedCreateWithoutPicturesInputObjectSchema as LocationUncheckedCreateWithoutPicturesInputObjectSchema } from './LocationUncheckedCreateWithoutPicturesInput.schema';
import { LocationCreateOrConnectWithoutPicturesInputObjectSchema as LocationCreateOrConnectWithoutPicturesInputObjectSchema } from './LocationCreateOrConnectWithoutPicturesInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationCreateWithoutPicturesInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutPicturesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutPicturesInputObjectSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional()
}).strict();
export const LocationCreateNestedOneWithoutPicturesInputObjectSchema: z.ZodType<Prisma.LocationCreateNestedOneWithoutPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateNestedOneWithoutPicturesInput>;
export const LocationCreateNestedOneWithoutPicturesInputObjectZodSchema = makeSchema();
