import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  reviewId: z.string(),
  tagId: z.string()
}).strict();
export const ReviewTagCreateManyInputObjectSchema: z.ZodType<Prisma.ReviewTagCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateManyInput>;
export const ReviewTagCreateManyInputObjectZodSchema = makeSchema();
