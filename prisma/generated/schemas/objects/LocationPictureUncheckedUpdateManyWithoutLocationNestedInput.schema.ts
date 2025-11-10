import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationPictureCreateWithoutLocationInputObjectSchema as LocationPictureCreateWithoutLocationInputObjectSchema } from './LocationPictureCreateWithoutLocationInput.schema';
import { LocationPictureUncheckedCreateWithoutLocationInputObjectSchema as LocationPictureUncheckedCreateWithoutLocationInputObjectSchema } from './LocationPictureUncheckedCreateWithoutLocationInput.schema';
import { LocationPictureCreateOrConnectWithoutLocationInputObjectSchema as LocationPictureCreateOrConnectWithoutLocationInputObjectSchema } from './LocationPictureCreateOrConnectWithoutLocationInput.schema';
import { LocationPictureUpsertWithWhereUniqueWithoutLocationInputObjectSchema as LocationPictureUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './LocationPictureUpsertWithWhereUniqueWithoutLocationInput.schema';
import { LocationPictureCreateManyLocationInputEnvelopeObjectSchema as LocationPictureCreateManyLocationInputEnvelopeObjectSchema } from './LocationPictureCreateManyLocationInputEnvelope.schema';
import { LocationPictureWhereUniqueInputObjectSchema as LocationPictureWhereUniqueInputObjectSchema } from './LocationPictureWhereUniqueInput.schema';
import { LocationPictureUpdateWithWhereUniqueWithoutLocationInputObjectSchema as LocationPictureUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './LocationPictureUpdateWithWhereUniqueWithoutLocationInput.schema';
import { LocationPictureUpdateManyWithWhereWithoutLocationInputObjectSchema as LocationPictureUpdateManyWithWhereWithoutLocationInputObjectSchema } from './LocationPictureUpdateManyWithWhereWithoutLocationInput.schema';
import { LocationPictureScalarWhereInputObjectSchema as LocationPictureScalarWhereInputObjectSchema } from './LocationPictureScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationPictureCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureCreateWithoutLocationInputObjectSchema).array(), z.lazy(() => LocationPictureUncheckedCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureUncheckedCreateWithoutLocationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LocationPictureCreateOrConnectWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureCreateOrConnectWithoutLocationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LocationPictureUpsertWithWhereUniqueWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureUpsertWithWhereUniqueWithoutLocationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LocationPictureCreateManyLocationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LocationPictureWhereUniqueInputObjectSchema), z.lazy(() => LocationPictureWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LocationPictureWhereUniqueInputObjectSchema), z.lazy(() => LocationPictureWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LocationPictureWhereUniqueInputObjectSchema), z.lazy(() => LocationPictureWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LocationPictureWhereUniqueInputObjectSchema), z.lazy(() => LocationPictureWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LocationPictureUpdateWithWhereUniqueWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureUpdateWithWhereUniqueWithoutLocationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LocationPictureUpdateManyWithWhereWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureUpdateManyWithWhereWithoutLocationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LocationPictureScalarWhereInputObjectSchema), z.lazy(() => LocationPictureScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LocationPictureUncheckedUpdateManyWithoutLocationNestedInputObjectSchema: z.ZodType<Prisma.LocationPictureUncheckedUpdateManyWithoutLocationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureUncheckedUpdateManyWithoutLocationNestedInput>;
export const LocationPictureUncheckedUpdateManyWithoutLocationNestedInputObjectZodSchema = makeSchema();
