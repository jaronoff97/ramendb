import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishCreateManyLocationInputObjectSchema as DishCreateManyLocationInputObjectSchema } from './DishCreateManyLocationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DishCreateManyLocationInputObjectSchema), z.lazy(() => DishCreateManyLocationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DishCreateManyLocationInputEnvelopeObjectSchema: z.ZodType<Prisma.DishCreateManyLocationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DishCreateManyLocationInputEnvelope>;
export const DishCreateManyLocationInputEnvelopeObjectZodSchema = makeSchema();
