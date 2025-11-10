import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationPictureCreateWithoutLocationInputObjectSchema as LocationPictureCreateWithoutLocationInputObjectSchema } from './LocationPictureCreateWithoutLocationInput.schema';
import { LocationPictureUncheckedCreateWithoutLocationInputObjectSchema as LocationPictureUncheckedCreateWithoutLocationInputObjectSchema } from './LocationPictureUncheckedCreateWithoutLocationInput.schema';
import { LocationPictureCreateOrConnectWithoutLocationInputObjectSchema as LocationPictureCreateOrConnectWithoutLocationInputObjectSchema } from './LocationPictureCreateOrConnectWithoutLocationInput.schema';
import { LocationPictureCreateManyLocationInputEnvelopeObjectSchema as LocationPictureCreateManyLocationInputEnvelopeObjectSchema } from './LocationPictureCreateManyLocationInputEnvelope.schema';
import { LocationPictureWhereUniqueInputObjectSchema as LocationPictureWhereUniqueInputObjectSchema } from './LocationPictureWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationPictureCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureCreateWithoutLocationInputObjectSchema).array(), z.lazy(() => LocationPictureUncheckedCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureUncheckedCreateWithoutLocationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LocationPictureCreateOrConnectWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureCreateOrConnectWithoutLocationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LocationPictureCreateManyLocationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LocationPictureWhereUniqueInputObjectSchema), z.lazy(() => LocationPictureWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LocationPictureCreateNestedManyWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationPictureCreateNestedManyWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureCreateNestedManyWithoutLocationInput>;
export const LocationPictureCreateNestedManyWithoutLocationInputObjectZodSchema = makeSchema();
