import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema as DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const dishscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DishScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DishScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DishScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DishScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DishScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  locationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  price: z.union([z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'price' must be a Decimal",
})]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DishScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DishScalarWhereWithAggregatesInput> = dishscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DishScalarWhereWithAggregatesInput>;
export const DishScalarWhereWithAggregatesInputObjectZodSchema = dishscalarwherewithaggregatesinputSchema;
