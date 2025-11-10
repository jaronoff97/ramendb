import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { LocationCreateNestedOneWithoutDishesInputObjectSchema as LocationCreateNestedOneWithoutDishesInputObjectSchema } from './LocationCreateNestedOneWithoutDishesInput.schema';
import { DishTagCreateNestedManyWithoutDishInputObjectSchema as DishTagCreateNestedManyWithoutDishInputObjectSchema } from './DishTagCreateNestedManyWithoutDishInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'price' must be a Decimal",
}).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutDishesInputObjectSchema),
  tags: z.lazy(() => DishTagCreateNestedManyWithoutDishInputObjectSchema)
}).strict();
export const DishCreateInputObjectSchema: z.ZodType<Prisma.DishCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DishCreateInput>;
export const DishCreateInputObjectZodSchema = makeSchema();
