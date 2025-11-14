import * as z from 'zod';

export const LocationSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  type: z.string(),
  address: z.string().nullish(),
  city: z.string().nullish(),
  state: z.string().nullish(),
  country: z.string().nullish(),
  latitude: z.number().nullish(),
  longitude: z.number().nullish(),
  website: z.string().nullish(),
  hours: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type LocationType = z.infer<typeof LocationSchema>;
