import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { LocationCreateNestedOneWithoutDishesInputObjectSchema as LocationCreateNestedOneWithoutDishesInputObjectSchema } from './LocationCreateNestedOneWithoutDishesInput.schema'

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
  updatedAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutDishesInputObjectSchema)
}).strict();
export const DishCreateWithoutTagsInputObjectSchema: z.ZodType<Prisma.DishCreateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.DishCreateWithoutTagsInput>;
export const DishCreateWithoutTagsInputObjectZodSchema = makeSchema();
