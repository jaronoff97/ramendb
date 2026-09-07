import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingUserIdLocationIdCompoundUniqueInputObjectSchema as RatingUserIdLocationIdCompoundUniqueInputObjectSchema } from './RatingUserIdLocationIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId_locationId: z.lazy(() => RatingUserIdLocationIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const RatingWhereUniqueInputObjectSchema: z.ZodType<Prisma.RatingWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingWhereUniqueInput>;
export const RatingWhereUniqueInputObjectZodSchema = makeSchema();
