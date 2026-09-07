import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import type { z } from 'zod'
import type {
  ReviewPureType,
  ReviewUpdateInputObjectSchema,
} from 'prisma/generated/schemas'
import { apiFetch } from '@/lib/api'

export type UpdateReviewInputType = z.input<
  typeof ReviewUpdateInputObjectSchema
>

/** Exactly the columns the reviews table renders. */
export interface ReviewListRow {
  id: string
  title: string | null
  createdAt: string
  user: { name: string | null }
  rating: { value: number } | null
  location: { name: string }
}

export interface ReviewPage {
  reviews: Array<ReviewListRow>
  nextCursor: string | null
}

/**
 * The list route pages now, so this walks the pages instead of asking for the
 * whole table. `useInfiniteQuery` keeps the loaded pages in one flat array.
 */
export function useReviews() {
  return useInfiniteQuery({
    queryKey: ['reviews'],
    initialPageParam: null as string | null,
    queryFn: ({ pageParam }) => {
      const params = new URLSearchParams()
      if (pageParam) params.set('cursor', pageParam)
      const suffix = params.size > 0 ? `?${params.toString()}` : ''
      return apiFetch<ReviewPage>(`/api/reviews/${suffix}`)
    },
    getNextPageParam: (last) => last.nextCursor,
    select: (data) => ({
      reviews: data.pages.flatMap((page) => page.reviews),
    }),
  })
}

export function useReview(id?: string) {
  return useQuery({
    queryKey: ['reviews', id],
    queryFn: () => apiFetch<ReviewPureType>(`/api/reviews/${id}`),
    enabled: !!id,
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
      // No client-side validation here on purpose. The PUT route parses the
      // same schema and answers 400. Importing one value from the generated
      // barrel pulled all 455 schema files, and decimal.js with them, which
      // cost this page about 290 KB to say "invalid" a moment sooner.
      return apiFetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify(input),
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
