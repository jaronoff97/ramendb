import * as z from 'zod';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    workosId: z.string(),
    email: z.string(),
    name: z.string().nullable(),
    pictureUrl: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    ratings: z.array(z.unknown()),
    reviews: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
