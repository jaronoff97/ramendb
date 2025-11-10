import * as z from 'zod';
// prettier-ignore
export const DishTagInputSchema = z.object({
    dishId: z.string(),
    tagId: z.string(),
    dish: z.unknown(),
    tag: z.unknown()
}).strict();

export type DishTagInputType = z.infer<typeof DishTagInputSchema>;
