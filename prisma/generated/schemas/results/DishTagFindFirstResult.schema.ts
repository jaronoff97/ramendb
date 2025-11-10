import * as z from 'zod';
export const DishTagFindFirstResultSchema = z.nullable(z.object({
  dishId: z.string(),
  tagId: z.string(),
  dish: z.unknown(),
  tag: z.unknown()
}));