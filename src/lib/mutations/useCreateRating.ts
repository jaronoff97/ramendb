import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { z } from 'zod'
import type { RatingCreateInputObjectZodSchema, RatingResultSchema } from 'prisma/generated/schemas'

export type RatingInput = z.infer<typeof RatingCreateInputObjectZodSchema>
export type ReviewResult = z.infer<typeof RatingResultSchema>

export function useCreateRating() {
  return useMutation({
    mutationKey: ['createRating'],
    mutationFn: (data: RatingInput): Promise<ReviewResult> =>
      apiFetch('/api/ratings', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
