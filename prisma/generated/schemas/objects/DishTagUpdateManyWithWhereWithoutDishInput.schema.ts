import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagScalarWhereInputObjectSchema as DishTagScalarWhereInputObjectSchema } from './DishTagScalarWhereInput.schema';
import { DishTagUpdateManyMutationInputObjectSchema as DishTagUpdateManyMutationInputObjectSchema } from './DishTagUpdateManyMutationInput.schema';
import { DishTagUncheckedUpdateManyWithoutDishInputObjectSchema as DishTagUncheckedUpdateManyWithoutDishInputObjectSchema } from './DishTagUncheckedUpdateManyWithoutDishInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishTagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DishTagUpdateManyMutationInputObjectSchema), z.lazy(() => DishTagUncheckedUpdateManyWithoutDishInputObjectSchema)])
}).strict();
export const DishTagUpdateManyWithWhereWithoutDishInputObjectSchema: z.ZodType<Prisma.DishTagUpdateManyWithWhereWithoutDishInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpdateManyWithWhereWithoutDishInput>;
export const DishTagUpdateManyWithWhereWithoutDishInputObjectZodSchema = makeSchema();
