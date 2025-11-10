import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishCreateWithoutTagsInputObjectSchema as DishCreateWithoutTagsInputObjectSchema } from './DishCreateWithoutTagsInput.schema';
import { DishUncheckedCreateWithoutTagsInputObjectSchema as DishUncheckedCreateWithoutTagsInputObjectSchema } from './DishUncheckedCreateWithoutTagsInput.schema';
import { DishCreateOrConnectWithoutTagsInputObjectSchema as DishCreateOrConnectWithoutTagsInputObjectSchema } from './DishCreateOrConnectWithoutTagsInput.schema';
import { DishUpsertWithoutTagsInputObjectSchema as DishUpsertWithoutTagsInputObjectSchema } from './DishUpsertWithoutTagsInput.schema';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './DishWhereUniqueInput.schema';
import { DishUpdateToOneWithWhereWithoutTagsInputObjectSchema as DishUpdateToOneWithWhereWithoutTagsInputObjectSchema } from './DishUpdateToOneWithWhereWithoutTagsInput.schema';
import { DishUpdateWithoutTagsInputObjectSchema as DishUpdateWithoutTagsInputObjectSchema } from './DishUpdateWithoutTagsInput.schema';
import { DishUncheckedUpdateWithoutTagsInputObjectSchema as DishUncheckedUpdateWithoutTagsInputObjectSchema } from './DishUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DishCreateWithoutTagsInputObjectSchema), z.lazy(() => DishUncheckedCreateWithoutTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DishCreateOrConnectWithoutTagsInputObjectSchema).optional(),
  upsert: z.lazy(() => DishUpsertWithoutTagsInputObjectSchema).optional(),
  connect: z.lazy(() => DishWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DishUpdateToOneWithWhereWithoutTagsInputObjectSchema), z.lazy(() => DishUpdateWithoutTagsInputObjectSchema), z.lazy(() => DishUncheckedUpdateWithoutTagsInputObjectSchema)]).optional()
}).strict();
export const DishUpdateOneRequiredWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.DishUpdateOneRequiredWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DishUpdateOneRequiredWithoutTagsNestedInput>;
export const DishUpdateOneRequiredWithoutTagsNestedInputObjectZodSchema = makeSchema();
