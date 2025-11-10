import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishCreateWithoutTagsInputObjectSchema as DishCreateWithoutTagsInputObjectSchema } from './DishCreateWithoutTagsInput.schema';
import { DishUncheckedCreateWithoutTagsInputObjectSchema as DishUncheckedCreateWithoutTagsInputObjectSchema } from './DishUncheckedCreateWithoutTagsInput.schema';
import { DishCreateOrConnectWithoutTagsInputObjectSchema as DishCreateOrConnectWithoutTagsInputObjectSchema } from './DishCreateOrConnectWithoutTagsInput.schema';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './DishWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DishCreateWithoutTagsInputObjectSchema), z.lazy(() => DishUncheckedCreateWithoutTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DishCreateOrConnectWithoutTagsInputObjectSchema).optional(),
  connect: z.lazy(() => DishWhereUniqueInputObjectSchema).optional()
}).strict();
export const DishCreateNestedOneWithoutTagsInputObjectSchema: z.ZodType<Prisma.DishCreateNestedOneWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.DishCreateNestedOneWithoutTagsInput>;
export const DishCreateNestedOneWithoutTagsInputObjectZodSchema = makeSchema();
