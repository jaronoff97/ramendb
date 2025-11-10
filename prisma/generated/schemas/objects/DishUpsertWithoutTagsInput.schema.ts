import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishUpdateWithoutTagsInputObjectSchema as DishUpdateWithoutTagsInputObjectSchema } from './DishUpdateWithoutTagsInput.schema';
import { DishUncheckedUpdateWithoutTagsInputObjectSchema as DishUncheckedUpdateWithoutTagsInputObjectSchema } from './DishUncheckedUpdateWithoutTagsInput.schema';
import { DishCreateWithoutTagsInputObjectSchema as DishCreateWithoutTagsInputObjectSchema } from './DishCreateWithoutTagsInput.schema';
import { DishUncheckedCreateWithoutTagsInputObjectSchema as DishUncheckedCreateWithoutTagsInputObjectSchema } from './DishUncheckedCreateWithoutTagsInput.schema';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './DishWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DishUpdateWithoutTagsInputObjectSchema), z.lazy(() => DishUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => DishCreateWithoutTagsInputObjectSchema), z.lazy(() => DishUncheckedCreateWithoutTagsInputObjectSchema)]),
  where: z.lazy(() => DishWhereInputObjectSchema).optional()
}).strict();
export const DishUpsertWithoutTagsInputObjectSchema: z.ZodType<Prisma.DishUpsertWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.DishUpsertWithoutTagsInput>;
export const DishUpsertWithoutTagsInputObjectZodSchema = makeSchema();
