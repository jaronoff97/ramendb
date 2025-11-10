import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  locationId: z.string(),
  tagId: z.string()
}).strict();
export const LocationTagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LocationTagUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUncheckedCreateInput>;
export const LocationTagUncheckedCreateInputObjectZodSchema = makeSchema();
