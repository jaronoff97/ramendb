import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  locationId: z.string()
}).strict();
export const LocationTagUncheckedCreateWithoutTagInputObjectSchema: z.ZodType<Prisma.LocationTagUncheckedCreateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUncheckedCreateWithoutTagInput>;
export const LocationTagUncheckedCreateWithoutTagInputObjectZodSchema = makeSchema();
