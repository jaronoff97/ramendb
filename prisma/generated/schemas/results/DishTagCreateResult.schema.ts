import * as z from 'zod';
export const DishTagCreateResultSchema = z.object({
  dishId: z.string(),
  tagId: z.string(),
  dish: z.unknown(),
  tag: z.unknown()
});