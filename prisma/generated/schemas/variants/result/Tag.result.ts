import * as z from 'zod';
// prettier-ignore
export const TagResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    category: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    locations: z.array(z.unknown()),
    dishes: z.array(z.unknown()),
    ratings: z.array(z.unknown()),
    reviews: z.array(z.unknown())
}).strict();

export type TagResultType = z.infer<typeof TagResultSchema>;
