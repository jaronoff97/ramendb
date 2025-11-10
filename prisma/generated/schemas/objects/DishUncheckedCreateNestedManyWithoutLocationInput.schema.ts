import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishCreateWithoutLocationInputObjectSchema as DishCreateWithoutLocationInputObjectSchema } from './DishCreateWithoutLocationInput.schema';
import { DishUncheckedCreateWithoutLocationInputObjectSchema as DishUncheckedCreateWithoutLocationInputObjectSchema } from './DishUncheckedCreateWithoutLocationInput.schema';
import { DishCreateOrConnectWithoutLocationInputObjectSchema as DishCreateOrConnectWithoutLocationInputObjectSchema } from './DishCreateOrConnectWithoutLocationInput.schema';
import { DishCreateManyLocationInputEnvelopeObjectSchema as DishCreateManyLocationInputEnvelopeObjectSchema } from './DishCreateManyLocationInputEnvelope.schema';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './DishWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DishCreateWithoutLocationInputObjectSchema), z.lazy(() => DishCreateWithoutLocationInputObjectSchema).array(), z.lazy(() => DishUncheckedCreateWithoutLocationInputObjectSchema), z.lazy(() => DishUncheckedCreateWithoutLocationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DishCreateOrConnectWithoutLocationInputObjectSchema), z.lazy(() => DishCreateOrConnectWithoutLocationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DishCreateManyLocationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DishWhereUniqueInputObjectSchema), z.lazy(() => DishWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DishUncheckedCreateNestedManyWithoutLocationInputObjectSchema: z.ZodType<Prisma.DishUncheckedCreateNestedManyWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishUncheckedCreateNestedManyWithoutLocationInput>;
export const DishUncheckedCreateNestedManyWithoutLocationInputObjectZodSchema = makeSchema();
