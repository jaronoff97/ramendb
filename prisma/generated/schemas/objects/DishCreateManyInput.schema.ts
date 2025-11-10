import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
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
export const DishCreateManyInputObjectSchema: z.ZodType<Prisma.DishCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DishCreateManyInput>;
export const DishCreateManyInputObjectZodSchema = makeSchema();
