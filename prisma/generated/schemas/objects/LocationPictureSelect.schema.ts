import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationArgsObjectSchema as LocationArgsObjectSchema } from './LocationArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  locationId: z.boolean().optional(),
  url: z.boolean().optional(),
  caption: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  location: z.union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)]).optional()
}).strict();
export const LocationPictureSelectObjectSchema: z.ZodType<Prisma.LocationPictureSelect> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureSelect>;
export const LocationPictureSelectObjectZodSchema = makeSchema();
