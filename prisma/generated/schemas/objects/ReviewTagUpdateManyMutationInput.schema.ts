import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const ReviewTagUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ReviewTagUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpdateManyMutationInput>;
export const ReviewTagUpdateManyMutationInputObjectZodSchema = makeSchema();
