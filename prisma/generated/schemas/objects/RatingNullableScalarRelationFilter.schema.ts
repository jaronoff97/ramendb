import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RatingWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => RatingWhereInputObjectSchema).optional().nullable()
}).strict();
export const RatingNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.RatingNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RatingNullableScalarRelationFilter>;
export const RatingNullableScalarRelationFilterObjectZodSchema = makeSchema();
