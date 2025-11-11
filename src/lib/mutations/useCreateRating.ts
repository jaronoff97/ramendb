import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { z } from 'zod'
import type { RatingCreateWithoutReviewsInputObjectZodSchema } from 'prisma/generated/schemas'

type RatingInput = z.infer<typeof RatingCreateWithoutReviewsInputObjectZodSchema>

export function useCreateRating() {
  return useMutation({
    mutationKey: ['createRating'],
    mutationFn: (data: RatingInput) =>
      apiFetch('/api/ratings', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
