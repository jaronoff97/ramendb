import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const ratingscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RatingScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RatingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RatingScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RatingScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RatingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  locationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RatingScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RatingScalarWhereWithAggregatesInput> = ratingscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RatingScalarWhereWithAggregatesInput>;
export const RatingScalarWhereWithAggregatesInputObjectZodSchema = ratingscalarwherewithaggregatesinputSchema;
