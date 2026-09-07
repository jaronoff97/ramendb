import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const ratingscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RatingScalarWhereInputObjectSchema), z.lazy(() => RatingScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RatingScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RatingScalarWhereInputObjectSchema), z.lazy(() => RatingScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  locationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RatingScalarWhereInputObjectSchema: z.ZodType<Prisma.RatingScalarWhereInput> = ratingscalarwhereinputSchema as unknown as z.ZodType<Prisma.RatingScalarWhereInput>;
export const RatingScalarWhereInputObjectZodSchema = ratingscalarwhereinputSchema;
