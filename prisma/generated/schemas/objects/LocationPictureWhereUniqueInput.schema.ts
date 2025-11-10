import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const LocationPictureWhereUniqueInputObjectSchema: z.ZodType<Prisma.LocationPictureWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureWhereUniqueInput>;
export const LocationPictureWhereUniqueInputObjectZodSchema = makeSchema();
