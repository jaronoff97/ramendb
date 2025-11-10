import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string().optional()
}).strict();
export const LocationWhereUniqueInputObjectSchema: z.ZodType<Prisma.LocationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationWhereUniqueInput>;
export const LocationWhereUniqueInputObjectZodSchema = makeSchema();
