import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const RatingWhereUniqueInputObjectSchema: z.ZodType<Prisma.RatingWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingWhereUniqueInput>;
export const RatingWhereUniqueInputObjectZodSchema = makeSchema();
