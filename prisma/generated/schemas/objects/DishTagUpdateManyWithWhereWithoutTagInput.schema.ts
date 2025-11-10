import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagScalarWhereInputObjectSchema as DishTagScalarWhereInputObjectSchema } from './DishTagScalarWhereInput.schema';
import { DishTagUpdateManyMutationInputObjectSchema as DishTagUpdateManyMutationInputObjectSchema } from './DishTagUpdateManyMutationInput.schema';
import { DishTagUncheckedUpdateManyWithoutTagInputObjectSchema as DishTagUncheckedUpdateManyWithoutTagInputObjectSchema } from './DishTagUncheckedUpdateManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishTagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DishTagUpdateManyMutationInputObjectSchema), z.lazy(() => DishTagUncheckedUpdateManyWithoutTagInputObjectSchema)])
}).strict();
export const DishTagUpdateManyWithWhereWithoutTagInputObjectSchema: z.ZodType<Prisma.DishTagUpdateManyWithWhereWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpdateManyWithWhereWithoutTagInput>;
export const DishTagUpdateManyWithWhereWithoutTagInputObjectZodSchema = makeSchema();
