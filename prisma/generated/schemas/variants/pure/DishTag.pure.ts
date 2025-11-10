import * as z from 'zod';
// prettier-ignore
export const DishTagModelSchema = z.object({
    dishId: z.string(),
    tagId: z.string(),
    dish: z.unknown(),
    tag: z.unknown()
}).strict();

export type DishTagPureType = z.infer<typeof DishTagModelSchema>;
