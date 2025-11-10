import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  reviewId: z.string(),
  tagId: z.string()
}).strict();
export const ReviewTagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ReviewTagUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUncheckedCreateInput>;
export const ReviewTagUncheckedCreateInputObjectZodSchema = makeSchema();
