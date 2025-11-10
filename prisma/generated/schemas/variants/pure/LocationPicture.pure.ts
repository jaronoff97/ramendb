import * as z from 'zod';
// prettier-ignore
export const LocationPictureModelSchema = z.object({
    id: z.string(),
    locationId: z.string(),
    url: z.string(),
    caption: z.string().nullable(),
    createdAt: z.date(),
    location: z.unknown()
}).strict();

export type LocationPicturePureType = z.infer<typeof LocationPictureModelSchema>;
