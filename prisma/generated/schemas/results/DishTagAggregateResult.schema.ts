import * as z from 'zod';
export const DishTagAggregateResultSchema = z.object({  _count: z.object({
    dishId: z.number(),
    tagId: z.number(),
    dish: z.number(),
    tag: z.number()
  }).optional(),
  _min: z.object({
    dishId: z.string().nullable(),
    tagId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    dishId: z.string().nullable(),
    tagId: z.string().nullable()
  }).nullable().optional()});