import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishScalarWhereInputObjectSchema as DishScalarWhereInputObjectSchema } from './DishScalarWhereInput.schema';
import { DishUpdateManyMutationInputObjectSchema as DishUpdateManyMutationInputObjectSchema } from './DishUpdateManyMutationInput.schema';
import { DishUncheckedUpdateManyWithoutLocationInputObjectSchema as DishUncheckedUpdateManyWithoutLocationInputObjectSchema } from './DishUncheckedUpdateManyWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DishUpdateManyMutationInputObjectSchema), z.lazy(() => DishUncheckedUpdateManyWithoutLocationInputObjectSchema)])
}).strict();
export const DishUpdateManyWithWhereWithoutLocationInputObjectSchema: z.ZodType<Prisma.DishUpdateManyWithWhereWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishUpdateManyWithWhereWithoutLocationInput>;
export const DishUpdateManyWithWhereWithoutLocationInputObjectZodSchema = makeSchema();
