import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  reviewId: z.string()
}).strict();
export const ReviewTagCreateManyTagInputObjectSchema: z.ZodType<Prisma.ReviewTagCreateManyTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateManyTagInput>;
export const ReviewTagCreateManyTagInputObjectZodSchema = makeSchema();
