import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const dishscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DishScalarWhereInputObjectSchema), z.lazy(() => DishScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DishScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DishScalarWhereInputObjectSchema), z.lazy(() => DishScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  locationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  price: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'price' must be a Decimal",
})]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DishScalarWhereInputObjectSchema: z.ZodType<Prisma.DishScalarWhereInput> = dishscalarwhereinputSchema as unknown as z.ZodType<Prisma.DishScalarWhereInput>;
export const DishScalarWhereInputObjectZodSchema = dishscalarwhereinputSchema;
