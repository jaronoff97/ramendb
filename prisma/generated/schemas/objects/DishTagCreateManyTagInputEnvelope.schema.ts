import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagCreateManyTagInputObjectSchema as DishTagCreateManyTagInputObjectSchema } from './DishTagCreateManyTagInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DishTagCreateManyTagInputObjectSchema), z.lazy(() => DishTagCreateManyTagInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DishTagCreateManyTagInputEnvelopeObjectSchema: z.ZodType<Prisma.DishTagCreateManyTagInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateManyTagInputEnvelope>;
export const DishTagCreateManyTagInputEnvelopeObjectZodSchema = makeSchema();
