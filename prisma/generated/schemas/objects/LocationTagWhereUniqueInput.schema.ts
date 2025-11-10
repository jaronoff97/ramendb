import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagLocationIdTagIdCompoundUniqueInputObjectSchema as LocationTagLocationIdTagIdCompoundUniqueInputObjectSchema } from './LocationTagLocationIdTagIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  locationId_tagId: z.lazy(() => LocationTagLocationIdTagIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const LocationTagWhereUniqueInputObjectSchema: z.ZodType<Prisma.LocationTagWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagWhereUniqueInput>;
export const LocationTagWhereUniqueInputObjectZodSchema = makeSchema();
