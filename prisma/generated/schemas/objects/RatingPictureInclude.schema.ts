import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingArgsObjectSchema as RatingArgsObjectSchema } from './RatingArgs.schema'

const makeSchema = () => z.object({
  rating: z.union([z.boolean(), z.lazy(() => RatingArgsObjectSchema)]).optional()
}).strict();
export const RatingPictureIncludeObjectSchema: z.ZodType<Prisma.RatingPictureInclude> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureInclude>;
export const RatingPictureIncludeObjectZodSchema = makeSchema();
