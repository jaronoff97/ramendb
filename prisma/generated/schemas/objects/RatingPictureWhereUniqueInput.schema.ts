import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const RatingPictureWhereUniqueInputObjectSchema: z.ZodType<Prisma.RatingPictureWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureWhereUniqueInput>;
export const RatingPictureWhereUniqueInputObjectZodSchema = makeSchema();
