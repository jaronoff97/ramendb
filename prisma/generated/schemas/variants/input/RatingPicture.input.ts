import * as z from 'zod';
// prettier-ignore
export const RatingPictureInputSchema = z.object({
    id: z.string(),
    ratingId: z.string(),
    url: z.string(),
    caption: z.string().optional().nullable(),
    createdAt: z.date(),
    rating: z.unknown()
}).strict();

export type RatingPictureInputType = z.infer<typeof RatingPictureInputSchema>;
