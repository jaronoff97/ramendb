import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCountOutputTypeCountPicturesArgsObjectSchema as ReviewCountOutputTypeCountPicturesArgsObjectSchema } from './ReviewCountOutputTypeCountPicturesArgs.schema';
import { ReviewCountOutputTypeCountTagsArgsObjectSchema as ReviewCountOutputTypeCountTagsArgsObjectSchema } from './ReviewCountOutputTypeCountTagsArgs.schema'

const makeSchema = () => z.object({
  pictures: z.union([z.boolean(), z.lazy(() => ReviewCountOutputTypeCountPicturesArgsObjectSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => ReviewCountOutputTypeCountTagsArgsObjectSchema)]).optional()
}).strict();
export const ReviewCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ReviewCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCountOutputTypeSelect>;
export const ReviewCountOutputTypeSelectObjectZodSchema = makeSchema();
