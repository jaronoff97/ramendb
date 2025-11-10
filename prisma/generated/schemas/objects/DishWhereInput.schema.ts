import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { LocationScalarRelationFilterObjectSchema as LocationScalarRelationFilterObjectSchema } from './LocationScalarRelationFilter.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { DishTagListRelationFilterObjectSchema as DishTagListRelationFilterObjectSchema } from './DishTagListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const dishwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DishWhereInputObjectSchema), z.lazy(() => DishWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DishWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DishWhereInputObjectSchema), z.lazy(() => DishWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  location: z.union([z.lazy(() => LocationScalarRelationFilterObjectSchema), z.lazy(() => LocationWhereInputObjectSchema)]).optional(),
  tags: z.lazy(() => DishTagListRelationFilterObjectSchema).optional()
}).strict();
export const DishWhereInputObjectSchema: z.ZodType<Prisma.DishWhereInput> = dishwhereinputSchema as unknown as z.ZodType<Prisma.DishWhereInput>;
export const DishWhereInputObjectZodSchema = dishwhereinputSchema;
