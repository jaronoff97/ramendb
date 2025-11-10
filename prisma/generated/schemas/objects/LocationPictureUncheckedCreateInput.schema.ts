import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  locationId: z.string(),
  url: z.string(),
  caption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const LocationPictureUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LocationPictureUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureUncheckedCreateInput>;
export const LocationPictureUncheckedCreateInputObjectZodSchema = makeSchema();
