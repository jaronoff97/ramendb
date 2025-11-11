import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { z } from 'zod'
import type { ReviewCreateInputObjectZodSchema } from 'prisma/generated/schemas'

// infer type from your schema
type ReviewInput = z.infer<typeof ReviewCreateInputObjectZodSchema>

export function useCreateReview() {
  return useMutation({
    mutationKey: ['createReview'],
    mutationFn: (data: ReviewInput) =>
      apiFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
