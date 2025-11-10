import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    workosId: z.string(),
    email: z.string(),
    name: z.string().optional().nullable(),
    pictureUrl: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    ratings: z.array(z.unknown()),
    reviews: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
