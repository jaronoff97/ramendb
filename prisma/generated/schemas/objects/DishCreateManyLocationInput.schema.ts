import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


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
  updatedAt: z.coerce.date().optional()
}).strict();
export const DishCreateManyLocationInputObjectSchema: z.ZodType<Prisma.DishCreateManyLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishCreateManyLocationInput>;
export const DishCreateManyLocationInputObjectZodSchema = makeSchema();
