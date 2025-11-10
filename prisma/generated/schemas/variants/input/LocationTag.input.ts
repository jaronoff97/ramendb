import * as z from 'zod';
// prettier-ignore
export const LocationTagInputSchema = z.object({
    locationId: z.string(),
    tagId: z.string(),
    location: z.unknown(),
    tag: z.unknown()
}).strict();

export type LocationTagInputType = z.infer<typeof LocationTagInputSchema>;
