import * as z from 'zod';
// prettier-ignore
export const LocationTagModelSchema = z.object({
    locationId: z.string(),
    tagId: z.string(),
    location: z.unknown(),
    tag: z.unknown()
}).strict();

export type LocationTagPureType = z.infer<typeof LocationTagModelSchema>;
