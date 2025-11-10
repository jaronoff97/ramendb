import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const RatingTagUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.RatingTagUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUpdateManyMutationInput>;
export const RatingTagUpdateManyMutationInputObjectZodSchema = makeSchema();
