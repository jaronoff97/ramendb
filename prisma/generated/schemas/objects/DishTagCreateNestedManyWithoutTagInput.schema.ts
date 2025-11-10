import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagCreateWithoutTagInputObjectSchema as DishTagCreateWithoutTagInputObjectSchema } from './DishTagCreateWithoutTagInput.schema';
import { DishTagUncheckedCreateWithoutTagInputObjectSchema as DishTagUncheckedCreateWithoutTagInputObjectSchema } from './DishTagUncheckedCreateWithoutTagInput.schema';
import { DishTagCreateOrConnectWithoutTagInputObjectSchema as DishTagCreateOrConnectWithoutTagInputObjectSchema } from './DishTagCreateOrConnectWithoutTagInput.schema';
import { DishTagCreateManyTagInputEnvelopeObjectSchema as DishTagCreateManyTagInputEnvelopeObjectSchema } from './DishTagCreateManyTagInputEnvelope.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './DishTagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DishTagCreateWithoutTagInputObjectSchema), z.lazy(() => DishTagCreateWithoutTagInputObjectSchema).array(), z.lazy(() => DishTagUncheckedCreateWithoutTagInputObjectSchema), z.lazy(() => DishTagUncheckedCreateWithoutTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DishTagCreateOrConnectWithoutTagInputObjectSchema), z.lazy(() => DishTagCreateOrConnectWithoutTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DishTagCreateManyTagInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DishTagWhereUniqueInputObjectSchema), z.lazy(() => DishTagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DishTagCreateNestedManyWithoutTagInputObjectSchema: z.ZodType<Prisma.DishTagCreateNestedManyWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateNestedManyWithoutTagInput>;
export const DishTagCreateNestedManyWithoutTagInputObjectZodSchema = makeSchema();
