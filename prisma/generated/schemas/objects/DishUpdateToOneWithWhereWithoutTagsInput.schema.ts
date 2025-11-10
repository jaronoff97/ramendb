import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './DishWhereInput.schema';
import { DishUpdateWithoutTagsInputObjectSchema as DishUpdateWithoutTagsInputObjectSchema } from './DishUpdateWithoutTagsInput.schema';
import { DishUncheckedUpdateWithoutTagsInputObjectSchema as DishUncheckedUpdateWithoutTagsInputObjectSchema } from './DishUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DishUpdateWithoutTagsInputObjectSchema), z.lazy(() => DishUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const DishUpdateToOneWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.DishUpdateToOneWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.DishUpdateToOneWithWhereWithoutTagsInput>;
export const DishUpdateToOneWithWhereWithoutTagsInputObjectZodSchema = makeSchema();
