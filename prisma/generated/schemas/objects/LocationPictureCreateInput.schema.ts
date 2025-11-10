import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateNestedOneWithoutPicturesInputObjectSchema as LocationCreateNestedOneWithoutPicturesInputObjectSchema } from './LocationCreateNestedOneWithoutPicturesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  caption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  location: z.lazy(() => LocationCreateNestedOneWithoutPicturesInputObjectSchema)
}).strict();
export const LocationPictureCreateInputObjectSchema: z.ZodType<Prisma.LocationPictureCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureCreateInput>;
export const LocationPictureCreateInputObjectZodSchema = makeSchema();
