import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateWithoutLocationInputObjectSchema as RatingCreateWithoutLocationInputObjectSchema } from './RatingCreateWithoutLocationInput.schema';
import { RatingUncheckedCreateWithoutLocationInputObjectSchema as RatingUncheckedCreateWithoutLocationInputObjectSchema } from './RatingUncheckedCreateWithoutLocationInput.schema';
import { RatingCreateOrConnectWithoutLocationInputObjectSchema as RatingCreateOrConnectWithoutLocationInputObjectSchema } from './RatingCreateOrConnectWithoutLocationInput.schema';
import { RatingCreateManyLocationInputEnvelopeObjectSchema as RatingCreateManyLocationInputEnvelopeObjectSchema } from './RatingCreateManyLocationInputEnvelope.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingCreateWithoutLocationInputObjectSchema), z.lazy(() => RatingCreateWithoutLocationInputObjectSchema).array(), z.lazy(() => RatingUncheckedCreateWithoutLocationInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutLocationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RatingCreateOrConnectWithoutLocationInputObjectSchema), z.lazy(() => RatingCreateOrConnectWithoutLocationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RatingCreateManyLocationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RatingWhereUniqueInputObjectSchema), z.lazy(() => RatingWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RatingCreateNestedManyWithoutLocationInputObjectSchema: z.ZodType<Prisma.RatingCreateNestedManyWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateNestedManyWithoutLocationInput>;
export const RatingCreateNestedManyWithoutLocationInputObjectZodSchema = makeSchema();
