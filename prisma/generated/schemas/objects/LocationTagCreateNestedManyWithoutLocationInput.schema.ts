import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagCreateWithoutLocationInputObjectSchema as LocationTagCreateWithoutLocationInputObjectSchema } from './LocationTagCreateWithoutLocationInput.schema';
import { LocationTagUncheckedCreateWithoutLocationInputObjectSchema as LocationTagUncheckedCreateWithoutLocationInputObjectSchema } from './LocationTagUncheckedCreateWithoutLocationInput.schema';
import { LocationTagCreateOrConnectWithoutLocationInputObjectSchema as LocationTagCreateOrConnectWithoutLocationInputObjectSchema } from './LocationTagCreateOrConnectWithoutLocationInput.schema';
import { LocationTagCreateManyLocationInputEnvelopeObjectSchema as LocationTagCreateManyLocationInputEnvelopeObjectSchema } from './LocationTagCreateManyLocationInputEnvelope.schema';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './LocationTagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationTagCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationTagCreateWithoutLocationInputObjectSchema).array(), z.lazy(() => LocationTagUncheckedCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationTagUncheckedCreateWithoutLocationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LocationTagCreateOrConnectWithoutLocationInputObjectSchema), z.lazy(() => LocationTagCreateOrConnectWithoutLocationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LocationTagCreateManyLocationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LocationTagWhereUniqueInputObjectSchema), z.lazy(() => LocationTagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LocationTagCreateNestedManyWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationTagCreateNestedManyWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateNestedManyWithoutLocationInput>;
export const LocationTagCreateNestedManyWithoutLocationInputObjectZodSchema = makeSchema();
