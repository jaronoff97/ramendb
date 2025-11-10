import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  ReviewCreateInputObjectSchema,
  ReviewUpdateInputObjectSchema,
} from 'prisma/generated/schemas'
import { apiFetch } from '@/lib/api'

export function useReviews() {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: () => apiFetch<Array<any>>('/api/reviews/'),
  })
}

export function useReview(id?: string) {
  return useQuery({
    queryKey: ['reviews', id],
    queryFn: () => apiFetch(`/api/reviews/${id}`),
    enabled: !!id,
  })
}

export function useCreateReview() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async (input: unknown) => {
      const data = ReviewCreateInputObjectSchema.parse(input)
      return apiFetch('/api/reviews/', {
        method: 'POST',
        body: JSON.stringify(data),
      })
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['reviews'] }),
  })
}

export function useUpdateReview() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async ({
      id,
      input,
    }: {
      id: string
      input: unknown
    }) => {
      const data = ReviewUpdateInputObjectSchema.parse(input)
      return apiFetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      })
    },
    onSuccess: (_data, { id }) => {
      qc.invalidateQueries({ queryKey: ['reviews'] })
      qc.invalidateQueries({ queryKey: ['reviews', id] })
    },
  })
}

export function useDeleteReview() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      apiFetch(`/api/reviews/${id}`, { method: 'DELETE' }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['reviews'] }),
  })
}
