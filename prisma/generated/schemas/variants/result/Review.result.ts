import * as z from 'zod';
// prettier-ignore
export const ReviewResultSchema = z.object({
    id: z.string(),
    locationId: z.string(),
    userId: z.string(),
    ratingId: z.string().nullable(),
    title: z.string().nullable(),
    text: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    location: z.unknown(),
    user: z.unknown(),
    rating: z.unknown().nullable(),
    pictures: z.array(z.unknown()),
    tags: z.array(z.unknown())
}).strict();

export type ReviewResultType = z.infer<typeof ReviewResultSchema>;
