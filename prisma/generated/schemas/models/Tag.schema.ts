import * as z from 'zod';

export const TagSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TagType = z.infer<typeof TagSchema>;
