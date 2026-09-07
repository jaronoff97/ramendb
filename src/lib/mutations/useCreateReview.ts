import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { ReviewCreateBody } from '@/lib/types'
import type { ReviewPureType } from 'prisma/generated/schemas'

export function useCreateReview() {
  return useMutation({
    mutationKey: ['createReview'],
    mutationFn: (data: ReviewCreateBody): Promise<ReviewPureType> =>
      apiFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  })
}
