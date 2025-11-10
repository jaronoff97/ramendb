import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tagId: z.string()
}).strict();
export const LocationTagUncheckedCreateWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationTagUncheckedCreateWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUncheckedCreateWithoutLocationInput>;
export const LocationTagUncheckedCreateWithoutLocationInputObjectZodSchema = makeSchema();
