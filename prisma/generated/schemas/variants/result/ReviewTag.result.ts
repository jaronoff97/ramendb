import * as z from 'zod';
// prettier-ignore
export const ReviewTagResultSchema = z.object({
    reviewId: z.string(),
    tagId: z.string(),
    review: z.unknown(),
    tag: z.unknown()
}).strict();

export type ReviewTagResultType = z.infer<typeof ReviewTagResultSchema>;
