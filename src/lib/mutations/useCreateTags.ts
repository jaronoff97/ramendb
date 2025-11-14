import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { z } from 'zod'
import type { TagCreateManyInputObjectZodSchema } from 'prisma/generated/schemas'

// infer type from your schema
export type TagInput = z.infer<typeof TagCreateManyInputObjectZodSchema>

export function useCreateTags() {
  return useMutation({
    mutationKey: ['createTag'],
    mutationFn: (data: Array<TagInput>) =>
      apiFetch('/api/tags', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
