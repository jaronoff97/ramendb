import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateWithoutUserInputObjectSchema as RatingCreateWithoutUserInputObjectSchema } from './RatingCreateWithoutUserInput.schema';
import { RatingUncheckedCreateWithoutUserInputObjectSchema as RatingUncheckedCreateWithoutUserInputObjectSchema } from './RatingUncheckedCreateWithoutUserInput.schema';
import { RatingCreateOrConnectWithoutUserInputObjectSchema as RatingCreateOrConnectWithoutUserInputObjectSchema } from './RatingCreateOrConnectWithoutUserInput.schema';
import { RatingCreateManyUserInputEnvelopeObjectSchema as RatingCreateManyUserInputEnvelopeObjectSchema } from './RatingCreateManyUserInputEnvelope.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingCreateWithoutUserInputObjectSchema), z.lazy(() => RatingCreateWithoutUserInputObjectSchema).array(), z.lazy(() => RatingUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RatingCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => RatingCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RatingCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RatingWhereUniqueInputObjectSchema), z.lazy(() => RatingWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RatingCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.RatingCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateNestedManyWithoutUserInput>;
export const RatingCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
