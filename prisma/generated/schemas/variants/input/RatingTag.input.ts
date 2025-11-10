import * as z from 'zod';
// prettier-ignore
export const RatingTagInputSchema = z.object({
    ratingId: z.string(),
    tagId: z.string(),
    rating: z.unknown(),
    tag: z.unknown()
}).strict();

export type RatingTagInputType = z.infer<typeof RatingTagInputSchema>;
