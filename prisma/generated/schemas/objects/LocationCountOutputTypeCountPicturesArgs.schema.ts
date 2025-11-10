import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationPictureWhereInputObjectSchema as LocationPictureWhereInputObjectSchema } from './LocationPictureWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationPictureWhereInputObjectSchema).optional()
}).strict();
export const LocationCountOutputTypeCountPicturesArgsObjectSchema = makeSchema();
export const LocationCountOutputTypeCountPicturesArgsObjectZodSchema = makeSchema();
