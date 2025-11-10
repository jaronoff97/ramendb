import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  caption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const LocationPictureCreateWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationPictureCreateWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureCreateWithoutLocationInput>;
export const LocationPictureCreateWithoutLocationInputObjectZodSchema = makeSchema();
