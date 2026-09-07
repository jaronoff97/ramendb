import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiFetch } from '../api'
import type { ReviewCreateBody } from '@/lib/types'

interface CreatedReview {
  id: string
  location: { slug: string }
}

export function useCreateReview() {
  const qc = useQueryClient()
  return useMutation({
    mutationKey: ['createReview'],
    mutationFn: (data: ReviewCreateBody): Promise<CreatedReview> =>
      apiFetch('/api/reviews', { method: 'POST', body: JSON.stringify(data) }),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ['reviews'] })
      void qc.invalidateQueries({ queryKey: ['locations'] })
    },
  })
}
