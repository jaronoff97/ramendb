import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  locationId: z.string(),
  tagId: z.string()
}).strict();
export const LocationTagCreateManyInputObjectSchema: z.ZodType<Prisma.LocationTagCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateManyInput>;
export const LocationTagCreateManyInputObjectZodSchema = makeSchema();
