import * as z from 'zod';
export const LocationTagGroupByResultSchema = z.array(z.object({
  locationId: z.string(),
  tagId: z.string(),
  _count: z.object({
    locationId: z.number(),
    tagId: z.number(),
    location: z.number(),
    tag: z.number()
  }).optional(),
  _min: z.object({
    locationId: z.string().nullable(),
    tagId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    locationId: z.string().nullable(),
    tagId: z.string().nullable()
  }).nullable().optional()
}));