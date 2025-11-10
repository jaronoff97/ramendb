import * as z from 'zod';
// prettier-ignore
export const ReviewPictureResultSchema = z.object({
    id: z.string(),
    reviewId: z.string(),
    url: z.string(),
    caption: z.string().nullable(),
    createdAt: z.date(),
    review: z.unknown()
}).strict();

export type ReviewPictureResultType = z.infer<typeof ReviewPictureResultSchema>;
