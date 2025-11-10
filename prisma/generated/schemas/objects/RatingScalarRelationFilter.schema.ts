import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RatingWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => RatingWhereInputObjectSchema).optional()
}).strict();
export const RatingScalarRelationFilterObjectSchema: z.ZodType<Prisma.RatingScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RatingScalarRelationFilter>;
export const RatingScalarRelationFilterObjectZodSchema = makeSchema();
