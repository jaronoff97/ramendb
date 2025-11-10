import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationPictureWhereUniqueInputObjectSchema as LocationPictureWhereUniqueInputObjectSchema } from './LocationPictureWhereUniqueInput.schema';
import { LocationPictureCreateWithoutLocationInputObjectSchema as LocationPictureCreateWithoutLocationInputObjectSchema } from './LocationPictureCreateWithoutLocationInput.schema';
import { LocationPictureUncheckedCreateWithoutLocationInputObjectSchema as LocationPictureUncheckedCreateWithoutLocationInputObjectSchema } from './LocationPictureUncheckedCreateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationPictureWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LocationPictureCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureUncheckedCreateWithoutLocationInputObjectSchema)])
}).strict();
export const LocationPictureCreateOrConnectWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationPictureCreateOrConnectWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureCreateOrConnectWithoutLocationInput>;
export const LocationPictureCreateOrConnectWithoutLocationInputObjectZodSchema = makeSchema();
