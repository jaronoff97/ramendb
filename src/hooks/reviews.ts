import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  ReviewCreateInputObjectSchema,
  ReviewUpdateInputObjectZodSchema
} from 'prisma/generated/schemas'
import type { z } from 'zod';
import type {
  ReviewPureType,
  ReviewUpdateInputObjectSchema
} from 'prisma/generated/schemas';
import { apiFetch } from '@/lib/api'

export type UpdateReviewInputType = z.input<typeof ReviewUpdateInputObjectSchema>;

export function useReviews() {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: () => apiFetch<Array<ReviewPureType>>('/api/reviews/'),
  })
}

export function useReview(id?: string) {
  return useQuery({
    queryKey: ['reviews', id],
    queryFn: () => apiFetch<ReviewPureType>(`/api/reviews/${id}`),
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
      input: UpdateReviewInputType
    }) => {
      const parsed = ReviewUpdateInputObjectZodSchema.safeParse(input)
      if (!parsed.success) {
        return new Error(parsed.error.message)
      }
      return apiFetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify(parsed.data),
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
