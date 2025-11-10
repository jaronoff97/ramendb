import * as z from 'zod';
// prettier-ignore
export const LocationTagResultSchema = z.object({
    locationId: z.string(),
    tagId: z.string(),
    location: z.unknown(),
    tag: z.unknown()
}).strict();

export type LocationTagResultType = z.infer<typeof LocationTagResultSchema>;
