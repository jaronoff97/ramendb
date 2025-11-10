import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  locationId: z.string(),
  tagId: z.string()
}).strict();
export const LocationTagLocationIdTagIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.LocationTagLocationIdTagIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagLocationIdTagIdCompoundUniqueInput>;
export const LocationTagLocationIdTagIdCompoundUniqueInputObjectZodSchema = makeSchema();
