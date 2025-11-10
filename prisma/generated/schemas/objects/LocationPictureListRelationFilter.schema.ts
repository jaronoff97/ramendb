import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationPictureWhereInputObjectSchema as LocationPictureWhereInputObjectSchema } from './LocationPictureWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => LocationPictureWhereInputObjectSchema).optional(),
  some: z.lazy(() => LocationPictureWhereInputObjectSchema).optional(),
  none: z.lazy(() => LocationPictureWhereInputObjectSchema).optional()
}).strict();
export const LocationPictureListRelationFilterObjectSchema: z.ZodType<Prisma.LocationPictureListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureListRelationFilter>;
export const LocationPictureListRelationFilterObjectZodSchema = makeSchema();
