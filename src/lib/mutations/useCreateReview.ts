import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { z } from 'zod'
import type { ReviewCreateInputObjectZodSchema, ReviewCreateResultSchema } from 'prisma/generated/schemas'

// infer type from your schema
export type ReviewInput = z.infer<typeof ReviewCreateInputObjectZodSchema>
export type ReviewResult = z.infer<typeof ReviewCreateResultSchema>

export function useCreateReview() {
  return useMutation({
    mutationKey: ['createReview'],
    mutationFn: (data: ReviewInput): Promise<ReviewResult> =>
      apiFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
