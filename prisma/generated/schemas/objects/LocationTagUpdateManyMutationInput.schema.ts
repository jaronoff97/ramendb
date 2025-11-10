import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const LocationTagUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.LocationTagUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpdateManyMutationInput>;
export const LocationTagUpdateManyMutationInputObjectZodSchema = makeSchema();
