import * as z from 'zod';
export const DishTagGroupByResultSchema = z.array(z.object({
  dishId: z.string(),
  tagId: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));