import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tagId: z.string()
}).strict();
export const LocationTagCreateManyLocationInputObjectSchema: z.ZodType<Prisma.LocationTagCreateManyLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateManyLocationInput>;
export const LocationTagCreateManyLocationInputObjectZodSchema = makeSchema();
