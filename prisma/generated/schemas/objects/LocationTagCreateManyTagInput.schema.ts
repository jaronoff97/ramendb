import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  locationId: z.string()
}).strict();
export const LocationTagCreateManyTagInputObjectSchema: z.ZodType<Prisma.LocationTagCreateManyTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateManyTagInput>;
export const LocationTagCreateManyTagInputObjectZodSchema = makeSchema();
