import * as z from 'zod';
// prettier-ignore
export const ReviewInputSchema = z.object({
    id: z.string(),
    locationId: z.string(),
    userId: z.string(),
    ratingId: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    text: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    location: z.unknown(),
    user: z.unknown(),
    rating: z.unknown().optional().nullable(),
    pictures: z.array(z.unknown()),
    tags: z.array(z.unknown())
}).strict();

export type ReviewInputType = z.infer<typeof ReviewInputSchema>;
