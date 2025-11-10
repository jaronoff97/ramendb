import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagCreateManyDishInputObjectSchema as DishTagCreateManyDishInputObjectSchema } from './DishTagCreateManyDishInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DishTagCreateManyDishInputObjectSchema), z.lazy(() => DishTagCreateManyDishInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DishTagCreateManyDishInputEnvelopeObjectSchema: z.ZodType<Prisma.DishTagCreateManyDishInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateManyDishInputEnvelope>;
export const DishTagCreateManyDishInputEnvelopeObjectZodSchema = makeSchema();
