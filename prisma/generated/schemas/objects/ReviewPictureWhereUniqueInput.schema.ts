import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ReviewPictureWhereUniqueInputObjectSchema: z.ZodType<Prisma.ReviewPictureWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureWhereUniqueInput>;
export const ReviewPictureWhereUniqueInputObjectZodSchema = makeSchema();
