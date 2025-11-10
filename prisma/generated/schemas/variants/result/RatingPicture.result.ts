import * as z from 'zod';
// prettier-ignore
export const RatingPictureResultSchema = z.object({
    id: z.string(),
    ratingId: z.string(),
    url: z.string(),
    caption: z.string().nullable(),
    createdAt: z.date(),
    rating: z.unknown()
}).strict();

export type RatingPictureResultType = z.infer<typeof RatingPictureResultSchema>;
