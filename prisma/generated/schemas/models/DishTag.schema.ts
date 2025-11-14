import * as z from 'zod';

export const DishTagSchema = z.object({
  dishId: z.string(),
  tagId: z.string(),
});

export type DishTagType = z.infer<typeof DishTagSchema>;
