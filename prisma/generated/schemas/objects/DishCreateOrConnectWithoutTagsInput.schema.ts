import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './DishWhereUniqueInput.schema';
import { DishCreateWithoutTagsInputObjectSchema as DishCreateWithoutTagsInputObjectSchema } from './DishCreateWithoutTagsInput.schema';
import { DishUncheckedCreateWithoutTagsInputObjectSchema as DishUncheckedCreateWithoutTagsInputObjectSchema } from './DishUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DishCreateWithoutTagsInputObjectSchema), z.lazy(() => DishUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const DishCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.DishCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.DishCreateOrConnectWithoutTagsInput>;
export const DishCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();
