import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { RatingCreateBody } from '@/lib/types'
import type { RatingPureType } from 'prisma/generated/schemas'

export function useCreateRating() {
  return useMutation({
    mutationKey: ['createRating'],
    mutationFn: (data: RatingCreateBody): Promise<RatingPureType> =>
      apiFetch('/api/ratings', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
