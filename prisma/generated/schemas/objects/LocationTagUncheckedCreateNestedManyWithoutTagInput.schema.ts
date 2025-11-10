import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagCreateWithoutTagInputObjectSchema as LocationTagCreateWithoutTagInputObjectSchema } from './LocationTagCreateWithoutTagInput.schema';
import { LocationTagUncheckedCreateWithoutTagInputObjectSchema as LocationTagUncheckedCreateWithoutTagInputObjectSchema } from './LocationTagUncheckedCreateWithoutTagInput.schema';
import { LocationTagCreateOrConnectWithoutTagInputObjectSchema as LocationTagCreateOrConnectWithoutTagInputObjectSchema } from './LocationTagCreateOrConnectWithoutTagInput.schema';
import { LocationTagCreateManyTagInputEnvelopeObjectSchema as LocationTagCreateManyTagInputEnvelopeObjectSchema } from './LocationTagCreateManyTagInputEnvelope.schema';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './LocationTagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationTagCreateWithoutTagInputObjectSchema), z.lazy(() => LocationTagCreateWithoutTagInputObjectSchema).array(), z.lazy(() => LocationTagUncheckedCreateWithoutTagInputObjectSchema), z.lazy(() => LocationTagUncheckedCreateWithoutTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LocationTagCreateOrConnectWithoutTagInputObjectSchema), z.lazy(() => LocationTagCreateOrConnectWithoutTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LocationTagCreateManyTagInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LocationTagWhereUniqueInputObjectSchema), z.lazy(() => LocationTagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema: z.ZodType<Prisma.LocationTagUncheckedCreateNestedManyWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUncheckedCreateNestedManyWithoutTagInput>;
export const LocationTagUncheckedCreateNestedManyWithoutTagInputObjectZodSchema = makeSchema();
