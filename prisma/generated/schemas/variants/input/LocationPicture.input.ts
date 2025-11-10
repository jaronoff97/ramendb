import * as z from 'zod';
// prettier-ignore
export const LocationPictureInputSchema = z.object({
    id: z.string(),
    locationId: z.string(),
    url: z.string(),
    caption: z.string().optional().nullable(),
    createdAt: z.date(),
    location: z.unknown()
}).strict();

export type LocationPictureInputType = z.infer<typeof LocationPictureInputSchema>;
