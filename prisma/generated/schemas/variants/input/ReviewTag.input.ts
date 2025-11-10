import * as z from 'zod';
// prettier-ignore
export const ReviewTagInputSchema = z.object({
    reviewId: z.string(),
    tagId: z.string(),
    review: z.unknown(),
    tag: z.unknown()
}).strict();

export type ReviewTagInputType = z.infer<typeof ReviewTagInputSchema>;
