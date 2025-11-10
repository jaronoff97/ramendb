import * as z from 'zod';
// prettier-ignore
export const DishTagResultSchema = z.object({
    dishId: z.string(),
    tagId: z.string(),
    dish: z.unknown(),
    tag: z.unknown()
}).strict();

export type DishTagResultType = z.infer<typeof DishTagResultSchema>;
